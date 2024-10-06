import { createClient } from "redis";
import { exec } from "child_process"


const client = createClient({
  url: 'redis://redis:6379'  // The URL should match the service name in your Docker Compose
});

const pubClient = createClient({
  url: 'redis://redis:6379'
});

async function processCode(submission: string) {
  const { code, roomId } = JSON.parse(submission);
  console.log(`Processing code for room: ${roomId}`);
  console.log("Code to be executed:", code);

  const escapedCode = code.replace(/"/g, '\\"');

  // Execute the Python code
  exec(`python3 -c "${escapedCode}"`, (error, stdout, stderr) => {
    let codeOutput;
    if (error) {
      codeOutput = { error: stderr };
      console.error(`Error executing code: ${stderr}`);
    } else {
      codeOutput = { output: stdout };
      console.log(`Code executed successfully: ${stdout}`);
    }

    const messageRoomId = roomId;
    pubClient.publish("task_updates", JSON.stringify({ messageRoomId, codeOutput }))
      .then(() => {
        console.log(`Update sent for room: ${roomId} with output: ${JSON.stringify(codeOutput)}`);
      })
      .catch((err) => {
        console.error(`Failed to publish update: ${err}`);
      });
  });
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
