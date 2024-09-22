import { createClient } from "redis";



const client = createClient({
  url: 'redis://redis:6379'  // The URL should match the service name in your Docker Compose
});

const pubClient = createClient({
  url: 'redis://redis:6379'
});

async function processCode(submission: string) {
  const { code, roomId } = JSON.parse(submission);
  console.log(`Processing code for room: ${roomId}`);
  console.log(`Code: ${code}`);

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const codeOutput = "{ \"output\": \"Dummy Output from worker\" }";
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
