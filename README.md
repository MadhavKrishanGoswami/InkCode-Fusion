<p align="center">
  <h1 align="center">InkCode Fusion</h3>
  <p align="center">InkCode Fusion is an all-in-one web application designed for technical interviews and collaborative coding. It provides a versatile platform with powerful features for seamless communication, code collaboration, and interactive problem-solving.

---


## 🚀 Key Features

### 💻 Real-time Code Editor
- **Multi-user Synchronization**: Collaborate with others in real-time as the code editor syncs across all connected users.
- **Support for Multiple Languages**: Write code in various programming languages with real-time syntax highlighting.
- **Code History**: Navigate through the code history for seamless version control during your session.

### 💬 Integrated Chat
- **Real-time Messaging**: Communicate with your team using an in-built chat feature while coding.
- **Persistent Chat History**: Chat logs are maintained for reviewing discussions and suggestions post-session.

### 🎥 Video/Voice Calls
- **Face-to-Face Collaboration**: Initiate video and voice calls directly within the platform to discuss ideas and solve problems.
- **Multiple Participants Support**: Have group discussions with multiple users in a single session.

### ⚡ Live Code Execution
- **Instant Code Execution**: Run code instantly and see the results without leaving the application.
- **Multi-Language Support**: Supports code execution in various languages like Python, JavaScript, and more.

### 🧑‍🤝‍🧑 Collaborative Whiteboard (Planned)
- **Interactive Whiteboard**: Collaborate on diagrams and visual representations while coding.

---

## 🧱 Application Architecture

The architecture of **InkCode Fusion** is designed for scalability and real-time collaboration. Here's a high-level overview:

![Architecture Diagram](https://github.com/MadhavKrishanGoswami/InkCode-Fusion/assets/116915826/c5942d4b-c75b-4789-ab23-5bef7f9f596f)

---

## 🛠️ Technologies Used

### Frontend:
- **Framework**: MERN stack (React.js)
- **Libraries**: React, Tailwind CSS, CodeMirror
- **UI Enhancements**: Tailwind CSS for sleek, responsive UI design

### Backend:
- **Server**: Node.js
- **Real-time Features**: Socket.IO for real-time communication and collaboration
- **Video/Voice**: Agora SDK
- **Database/Cache**: Redis for session management

### Application Framework:
- **Desktop Application**: Electron.js
- **Monorepo Management**: Turborepo for efficient project structure and builds

---


## 🔧 Getting Started

To run **InkCode Fusion** on your local machine, follow these steps:

### Prerequisites
- **Docker**: Make sure Docker is installed on your machine. [Install Docker](https://www.docker.com/get-started)
- **Yarn**: If not installed, install Yarn using npm:
  ```bash
  npm install --global yarn
  
  ```

## Installation and Setup
1. Clone the Repository
   - Start by cloning the repository:
     ```bash
     git clone https://github.com/MadhavKrishanGoswami/InkCode-Fusion.git
     cd InkCode-Fusion
     
     ```
2. Run Redis Using Docker
   - Redis is required for real-time session management. Start Redis using Docker:
     ```bash
     
     docker run --rm --name redis -p 6379:6379 redis
     
     ```
3. Install Dependencies and Initialize Turborepo
   - Install the project dependencies using Yarn (recommended for Turborepo-based projects):
     ```bash
     
     yarn install
     
     ```
4. Run the Application in Development Mode
   - Start the application using the development script:
     ```bash
     
     yarn dev
     
     ```
5. Access the Application
   - Open your browser and navigate to http://localhost:3000 to access the frontend interface.
  
## 📖 Usage Instructions

### Create or Join a Room
You can either create a new room or join an existing one to start collaborating with your peers.

### Utilize the Features
- **Code Editor**: Collaborate with your peers in the real-time synced editor.
- **Chat**: Discuss your approach or ask questions through the chat interface.
- **Video/Voice Call**: Initiate a video or voice call to communicate effectively.
- **Run Code**: Execute and test your code snippets within the platform.

### Future Feature Updates
Stay tuned for future updates, including the interactive whiteboard and more advanced code collaboration features!

---
## 📋 Participating Programs

| Name                  | Logo                                                      | Purpose                                                                                                      |
|-----------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| GSSoC'2024-Extd       | ![GSSoC Logo](assets/GSSoC-Ext.png)             | The coding period is from October 1st to October 30th, during which contributors make contributions and earn points on the platform. |
| Hacktoberfest 2024    | ![Hacktoberfest Logo](assets/hacktoberfest.png) | Hacktoberfest is a month-long October event welcoming all skill levels to join the open-source community.     |

---

## 📈 GitHub Repository Stats
| 🌟 **Stars** | 🍴 **Forks** | 🐛 **Issues** | 🔔 **Open PRs** | 🔕 **Closed PRs** | 🛠️ **Languages** | ✅ **Contributors** |
|--------------|--------------|---------------|-----------------|------------------|------------------|------------------|
| ![GitHub stars](https://img.shields.io/github/stars/MadhavKrishanGoswami/InkCode-Fusion) | ![forks](https://img.shields.io/github/forks/MadhavKrishanGoswami/InkCode-Fusion) | ![issues](https://img.shields.io/github/issues/MadhavKrishanGoswami/InkCode-Fusion?color=32CD32) | ![pull requests](https://img.shields.io/github/issues-pr/MadhavKrishanGoswami/InkCode-Fusion?color=FFFF8F) | ![Closed PRs](https://img.shields.io/github/issues-pr-closed/MadhavKrishanGoswami/InkCode-Fusion?color=20B2AA) | ![Languages](https://img.shields.io/github/languages/count/MadhavKrishanGoswami/InkCode-Fusion?color=20B2AA) | ![Contributors](https://img.shields.io/github/contributors/MadhavKrishanGoswami/InkCode-Fusion?color=00FA9A) |

## 👥 Contributing

We welcome contributions from the community! To contribute to **InkCode Fusion**, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Submit a pull request detailing your changes.

Feel free to check out the **Issues** section for feature requests, bugs, or to suggest improvements.

---

## 👀 Our Contributors

- We extend our heartfelt gratitude for your invaluable contribution to our project! Your efforts play a pivotal role in elevating this project to greater heights.
- Make sure you show some love by giving ⭐ to our repository.

<div align="center">

  <a href="https://github.com/MadhavKrishanGoswami/InkCode-Fusion">
    <img src="https://contrib.rocks/image?repo=MadhavKrishanGoswami/InkCode-Fusion&&max=100" />
  </a>
</div>

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## 🤝 Acknowledgments

- Thanks to all the developers and contributors who have made this project possible.
- Special thanks to [Agora](https://www.agora.io/) for their SDK integration.
