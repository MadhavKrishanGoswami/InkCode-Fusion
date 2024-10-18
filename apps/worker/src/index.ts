import { createClient } from "redis";
import piston from "piston-client"


const client = createClient({
  // url: 'redis://redis:6379'  // The URL should match the service name in your Docker Compose
});

const pubClient = createClient({
  // url: 'redis://redis:6379'
});

const RESTRICTED_MODULES = ['os', 'subprocess', 'sys', 'builtins', 'importlib'];
const MAX_EXECUTION_TIME = 5000; // 5 seconds
const MAX_MEMORY = '50M'; // 50 megabytes

async function processCode(submission: string) {
  const { code, roomId } = JSON.parse(submission);
  console.log(`Processing code for room: ${roomId}`);
  console.log(`Code: ${code}`);

  const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')

  for (const module of RESTRICTED_MODULES) {
    if (escapedCode.includes(`import ${module}`) || escapedCode.includes(`from ${module}`)) {
      const error = `Error: cant use ${module}`;
      console.error("restricetd USEAGE", module)
      await pubClient.publish("task_updates", JSON.stringify({ messageRoomId: roomId, codeOutput: { error } }))
      return;
    }
  }
  // Execute the Python code

  const client = piston();
  const codeOutput = await client.execute('python', escapedCode, { language: '3.9.4 ' });

  const messageRoomId = roomId;
  console.log(`Code processed for room: ${messageRoomId} with output: ${codeOutput}`);
  // Send the output to the room
  await pubClient.publish("task_updates", JSON.stringify({ messageRoomId, codeOutput }));
  console.log(`Update send for room: ${roomId} with output: ${codeOutput}`);
}

async function startWorker() {
  try {
    await client.connect();
    console.log("Worker connected to Redis.");
    await pubClient.connect();
    console.log("Worker connected to Redis PubSub.");

    // Main loop
    while (true) {
      try {
        const submission = await client.brPop("codeForProcessing", 0);
        // @ts-ignore
        await processCode(submission.element);
      } catch (error) {
        console.error("Error processing submission:", error);
        // Implement your error handling logic here. For example, you might want to push
        // the submission back onto the queue or log the error to a file.
      }
    }
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startWorker();
