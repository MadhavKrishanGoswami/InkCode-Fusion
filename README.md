# 📖 InkCode Fusion 🖥️

![InkCode](inkcode.png) 

---

## 🌟 Table of Contents
- [Overview](#-overview-)
- [Key Features](#-key-features-)
- [Technologies Used](#-technologies-used-)
- [Setup](#-setup-instructions-)
- [Usage](#-usage-)
- [Contributions](#-contributions-)
- [License](#-license-)


---
## 🌟 Overview 🌟
**InkCode Fusion** is a comprehensive web application designed as a one-stop solution for technical interviews and collaborative coding sessions. It combines a suite of powerful features aimed at facilitating seamless communication, code collaboration, and interactive problem-solving. Built using **Electron.js**, the app follows a monorepo structure using **Turborepo**, making it efficient for development and deployment.



## ✨ Key Features ✨
- **📜 Real-time Code Editor**
  - A synchronized editor that allows multiple users to collaborate on code in real time with immediate updates.

- **💬 Integrated Chat Feature**
  - Chat functionality for real-time communication among participants, with maintained chat history for reference.

- **📹 Video/Voice Calls**
  - Supports video and voice calls for seamless face-to-face discussions during coding sessions.

- **🚀 Live Code Execution**
  - Instantly run and test code within the application environment, allowing users to visualize output immediately.

---
## 🏗️ Architecture ##

InkCode Fusion follows a monorepo architecture using Turborepo. This architecture allows multiple projects, such as the frontend, backend, and utilities, to reside in a single repository while maintaining modularity. By managing all dependencies and packages in a single place, it optimizes developer workflows and ensures seamless code sharing between different parts of the project.

![Architecture](https://github.com/MadhavKrishanGoswami/InkCode-Fusion/assets/116915826/c5942d4b-c75b-4789-ab23-5bef7f9f596f) 
---

## ⚙️ Technologies Used ⚙️

InkCode Fusion utilizes a robust technology stack to ensure high performance and a smooth user experience:

### **Frontend**
- **React.js**: For building the interactive user interface with reusable components.
- **CodeMirror**: A versatile code editor providing syntax highlighting and editing capabilities for multiple programming languages.
- **Tailwind CSS**: A utility-first CSS framework that enhances UI design with rapid and responsive styling.
- **Electron.js**: Allows the application to run as a desktop app, providing a native-like experience across various operating systems.

### **Backend**
- **Node.js**: Provides a scalable environment for handling real-time features efficiently.
- **Express.js**: A flexible framework for building APIs and managing server-side logic.
- **Socket.IO**: Enables real-time, bidirectional communication for collaborative features.
- **Redis**: An in-memory data store used for session management and caching.
- **Agora SDK**: Facilitates video and voice calling capabilities within the application.

---

## 🚀 How to Contribute to This Project

We’re excited to have you contribute to the **InkCode-Fusion** project! Follow these simple steps to get started:
***Requirments***
You need to have [Docker](https://www.docker.com/) Installed in your system.

1. **🍴 Fork the Repository**  
   - Go to the [repository page](https://github.com/MadhavKrishanGoswami/InkCode-Fusion).
   - Click the *Fork* button (top right) to create a copy in your GitHub account.

2. **💻 Clone Your Fork**  
   - Open your terminal and run:
     ```bash
     git clone https://github.com/your-username/WordWise.git
     ```
   - Replace `your-username` with your GitHub username.

3. **🌿 Create a New Branch** 
   - Create a new branch for your work:
     ```bash
     git checkout -b your-branch-name
     ```

4. **🛠️ Make Your Changes**
   - Start the application using Docker Compose:
```bash
docker-compose up --build
```
   - Contact the project manager [Madhav Krishan Goswami]((https://github.com/MadhavKrishanGoswami)) for any queries.

5. **✅ Test Your Changes**
   - Test your changes.

6. **💬 Commit Your Changes** 
   - Once ready, commit them with a descriptive message:
     ```bash
     git add .
     git commit -m "Added feature X or Fixed issue Y"
     ```

7. **📤 Push Your Changes**
   - Push your changes to your forked repository:
     ```bash
     git push origin your-branch-name
     ```

8. **🔄 Create a Pull Request (PR)** 
   - Go back to the original repository [here](https://github.com/MadhavKrishanGoswami/InkCode-Fusion).
   - Click the *Compare & pull request* button, write a short description of your changes, and submit the PR.

9. **🔎 Review Changes**
   - The project manager will review your PR, and if approved, your request will be merged.

---

## 🏆 Contribution Points
All tasks will be assigned various levels based on complexity and required skills. Each level provides different points:
- **🥇 Level 1**: 10 Points  
- **🥈 Level 2**: 25 Points  
- **🥉 Level 3**: 45 Points  

---

## GSSoC Guidelines 
It is important to adhere to the guidelines; violations can affect your profile. Review the guidelines [here](https://github.com/GSSoC24/Contributor/tree/main/gssoc-guidelines).

## 📄 License
This project is licensed under the MIT License, which is one of the most permissive open-source licenses available. Below are the key points regarding this license:

**Key Highlights of the MIT License:
-Freedom to Use: You are free to use the software for personal, commercial, or educational purposes without any restrictions.

-Modification Rights: You can modify the code to suit your needs, whether it's for fixing bugs, adding features, or customizing functionality.

-Distribution: You can distribute copies of the original software or your modified versions. If you do so, you must include the original MIT License in your distribution.

- No Warranty: The software is provided "as is," without any warranties or guarantees. This means that if there are bugs or issues, the original authors are not liable for any problems that may arise from using the software.
---
## 🚀For our Contributors 🚀

Thank you for taking the time to explore InkCode Fusion! We believe this application has the potential to revolutionize the way technical interviews and collaborative coding sessions are conducted. By providing a robust platform that integrates real-time collaboration, communication, and problem-solving, we aim to create a seamless experience for both interviewers and candidates.

As we continue to enhance the application, your feedback and contributions are invaluable to us. We invite you to participate, whether by reporting issues, suggesting features, or submitting pull requests. Together, we can build a tool that not only meets the needs of today's developers but also sets the standard for future collaborative coding applications.
