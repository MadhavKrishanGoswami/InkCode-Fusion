# Contributing to InkCode Fusion

Thank you for taking the time to contribute to **InkCode Fusion**! We are excited to have you here, and we appreciate your help in improving the project. Please follow these guidelines to ensure a smooth and collaborative experience.

## Table of Contents
1. [Setting Up the Project](#setting-up-the-project)
2. [Code of Conduct](#code-of-conduct)
3. [Issues](#issues)
4. [Pull Requests](#pull-requests)
5. [Commit Messages](#commit-messages)
6. [Coding Guidelines](#coding-guidelines)
7. [Getting Started](#getting-started)
8. [License](#license)

---

## Setting Up the Project

Follow these steps to set up the project locally:

1. **Fork the repository**: Click on the `Fork` button at the top right of this repository.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/<your-username>/InkCode-Fusion.git
3. **Navigate to the project directory**:
   ```bash
   cd InkCode-Fusion
4. **Create a new branch: Create a new branch for your feature or bug fix.**
   ```bash
   git checkout -b feature/my-new-feature
5. **Make your changes and commit them. Follow the commit message guidelines below.**

## Code of Conduct

Please note that this project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code and maintain a welcoming and inclusive environment for everyone.

---

## Issues

### Reporting Bugs

- Check if the issue is already reported in the [issues](https://github.com/MadhavKrishanGoswami/InkCode-Fusion/issues) section.
- If not, [open a new issue](https://github.com/MadhavKrishanGoswami/InkCode-Fusion/issues/new) with detailed steps to reproduce the bug.
- Be sure to include details such as the version of the project you are using, your operating system, and any relevant logs.

### Requesting Features

- To request a new feature, open an issue using the **Feature Request** template.
- Clearly describe the problem you want to solve and why it is essential.
- If possible, provide mockups or examples to illustrate the proposed feature.

---

## Pull Requests

### Steps to Submit a Pull Request

1. Ensure your branch is up to date with the `main` branch:
   ```bash
   git fetch origin
   git checkout main
   git merge origin/main
2. Push your feature branch:
   ```bash
   git push origin feature/my-new-feature
3. Open a pull request from your fork to the main branch of this repository.
4. In the pull request description:
   - Clearly describe the changes you have made.
   - Link to the issue you're addressing (if applicable).
   - Provide relevant screenshots or logs to demonstrate your changes.
  
### Pull Request Guidelines

- Ensure the PR passes all tests.
- Follow the [Coding Guidelines](#coding-guidelines) and [Development Workflow](#development-workflow).
- Be responsive to feedback from maintainers or reviewers.

## Commit Messages

- Write clear and concise commit messages.
- Use the following format for commit messages:
  ```bash
  [Component]: Description of the change

   Closes #issue-number

- Begin with an uppercase letter and keep the summary under 50 characters.
- Reference any related issue by number, using keywords like `Closes`, `Fixes`, `Resolves`.

## Coding Guidelines

- Ensure that your code adheres to the existing code style of the project.
- We use the following stack and styles:

### **Tech Stack**:

#### Frontend:
- **Framework**: MERN stack (React.js)
- **Libraries**: React, Tailwind CSS, CodeMirror
- **UI Enhancements**: Tailwind CSS for sleek, responsive UI design

#### Backend:
- **Server**: Node.js
- **Real-time Features**: Socket.IO for real-time communication and collaboration
- **Video/Voice**: Agora SDK
- **Database/Cache**: Redis for session management

#### Application Framework:
- **Desktop Application**: Electron.js
- **Monorepo Management**: Turborepo for efficient project structure and builds

## Getting Started

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

## License

By contributing, you agree that your contributions will be licensed under the MIT License.


### Explanation:

- **Setting Up the Project**: Provides steps for forking, cloning, and creating a new branch.
- **Code of Conduct**: References a `CODE_OF_CONDUCT.md` file (you might want to create this as well).
- **Issues**: Guidelines for reporting bugs and feature requests.
- **Pull Requests**: Clear instructions for submitting pull requests.
- **Commit Messages**: Encourages good commit practices with examples.
- **Coding Guidelines**: Instructs contributors on the tech stack and coding styles to follow.
- **Development Workflow**: Explains how to run the development server and tests.
- **License**: States the project license.
