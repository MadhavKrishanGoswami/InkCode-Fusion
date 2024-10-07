<h3> # InkCode Fusion </h3>

<b> InkCode Fusion is a comprehensive web application designed as a one-stop solution for technical interviews and collaborative coding sessions. It offers a versatile platform that combines a suite of powerful features aimed at facilitating seamless communication, code collaboration, and interactive problem-solving. This application is built using Electron.js and organized in a monorepo structure using Turborepo. </b>

 <h5> ## Features </h5>

### Real-time Code Editor 

- Synced code editor allowing multiple users to code simultaneously.
- Code synchronization enables instant updates across all connected users.
- Support for various programming languages with syntax highlighting.

### Chat Feature

- Integrated chat feature for real-time communication among all participants.
- Chat history maintained for seamless interaction during and after sessions.

### Video/Voice Calls

- Ability to initiate video and voice calls for face-to-face interaction.
- Supports multiple participants for collaborative discussions.

### Live Code Execution

- Run and test code within the application environment.
- Immediate execution and visualization of the code output.

## Technologies Used

- **Frontend:** MERN stack, React.js
- **Frontend Libraries:** React, Tailwind CSS, CodeMirror
- **Backend:** Node.js, Socket.IO, Agora (for video calls), Redis
- **Application Framework:** Electron.js 

## Architecture

![Untitled-2024-05-05-2157](https://github.com/MadhavKrishanGoswami/InkCode-Fusion/assets/116915826/c5942d4b-c75b-4789-ab23-5bef7f9f596f)

## Setup

### Prerequisites

- [Docker](https://www.docker.com/get-started) must be installed on your machine.
- **Yarn** must be installed. If you don't have Yarn installed, you can do so using npm:

   ```bash
   npm install --global yarn
   ```

### Running the Application

1. **Run Redis using Docker**  
   To run the application, you need a Redis instance running. Start Redis quickly using Docker:
   ```bash
   docker run --rm --name redis -p 6379:6379 redis
   ```

2. **Clone the Repository**
   ```bash
   git clone https://github.com/MadhavKrishanGoswami/InkCode-Fusion.git
   cd InkCode-Fusion
   ```

3. **Install Dependencies and Setup Turborepo**
   Once inside the project directory, install dependencies using Yarn (recommended for Turborepo):
   ```bash
   yarn install
   ```

4. **Start the Application in Development Mode**
   Run the application in development mode using the following command:
   ```bash
   yarn dev
   ```
5. **Access the Frontend**
   The frontend will be running on [http://localhost:3000](http://localhost:3000)
   
### Usage

1. Create or join a room to collaborate with others.
2. Explore and utilize the various features available.
3. Start a video/voice call, use the code editor, whiteboard, and chat functionality.
4. Run and test code snippets within the platform.

## Contributions

Contributions and feature requests are welcome. Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.
