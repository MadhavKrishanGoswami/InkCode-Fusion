import instagram from "../assets/socials/instagram.svg";
import discord from "../assets/socials/discord.svg";
import telegram from "../assets/socials/telegram.svg";
import twitter from "../assets/socials/twitter.svg";
import facebook from "../assets/socials/facebook.svg";
import Chat from "../assets/icons/Chat.svg";
import Interface from "../assets/icons/Interface.svg";
import Code from "../assets/icons/Code.svg";
import VideoCall from "../assets/icons/VideoCall.svg";
import Execution from "../assets/icons/Execution.svg";
import javascriptIcon from "../assets/icons/Javascript.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/Tailwind.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import expressIcon from "../assets/icons/express.svg";
import redisIcon from "../assets/icons/redis.svg";
import electronIcon from "../assets/icons/electron.svg";
import DockerIcon from "../assets/icons/docker.svg";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Tech Stack",
    url: "#TechStack",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#Contact",
  },
  {
    id: "5",
    title: "GitHub",
    url: "#https://github.com/MadhavKrishanGoswami/InkCode-Fusion",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Get Started",
    url: "/Start",
    onlyMobile: true,
  },
];

export const brainwaveServices = [
  "Real-time code collaboration",
  "Video and voice interviews",
  "Advanced code execution",
];
export const features = [
  {
    id: "0",
    title: "Real-Time Code Collaboration",
    text: "Allows multiple users to code together in real time, making it perfect for coding interviews and team projects.",
    backgroundUrl: "./src/assets/features/live-execution.svg",
    iconUrl: Code,
    light: true,
  },
  {
    id: "1",
    title: "Integrated Video Calls",
    text: "Built-in communication tools help users discuss ideas without leaving the platform, enhancing productivity.",
    backgroundUrl: "./src/assets/features/chat.svg",
    iconUrl: VideoCall,
    light: true,
  },
  {
    id: "2",
    title: "Live Code Execution",
    text: "Users can instantly compile and run code to see results, streamlining the testing and debugging process.",
    backgroundUrl: "./src/assets/features/live-execution.svg",
    iconUrl: Execution,
  },
  {
    id: "3",
    title: "Integrated Chat",
    text: "Built-in chat feature enables seamless communication among users during coding sessions.",
    backgroundUrl: "./src/assets/features/chat.svg",
    iconUrl: Chat,
    light: true,
  },
  {
    id: "4",
    title: "Customizable User Interface",
    text: "Let users tailor their workspace with themes and layouts that suit their preferences.",
    backgroundUrl: "./src/assets/features/live-execution.svg",
    iconUrl: Interface,
  },
];

export const TechText =
  "Harnessing the power of modern tools to create impactful solutions that stand the test of time.";

export const TechContent = [
  {
    id: "0",
    title: "Efficient Workflows",
    text: "Streamlined processes and automated workflows that save time and reduce manual effort, ensuring smoother project management.",
  },
  {
    id: "1",
    title: "User-Centric Design",
    text: "Creating intuitive, visually appealing interfaces that prioritize the user experience and enhance engagement.",
  },
  {
    id: "2",
    title: "Scalability & Performance",
    text: "Optimized solutions designed to scale with growing demands while maintaining high performance and reliability.",
  },
];

export const TechStack = [
  {
    id: "0",
    title: "JavaScript",
    icon: javascriptIcon,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "React",
    icon: reactIcon,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Node.js",
    icon: nodejsIcon,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Tailwind CSS",
    icon: tailwindIcon, // Use your Tailwind CSS icon here
    width: 34,
    height: 36,
  },
  {
    id: "4",
    title: "Express.js",
    icon: expressIcon,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Redis",
    icon: redisIcon, // Use your Redis icon here
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Electron.js",
    icon: electronIcon, // Use your Electron.js icon here
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Docker",
    icon: DockerIcon, // Use your Turborepo icon here
    width: 34,
    height: 28,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Basic real-time collaboration tools and video calls.",
    price: "0.00",
    features: [
      "Real-time code collaboration",
      "Basic code execution features",
      "Limited interview sessions",
    ],
  },
  {
    id: "1",
    title: "Monthly",
    description: "Advanced interview features and real-time code execution.",
    price: "9.99",
    features: [
      "Unlimited real-time collaboration",
      "Advanced code execution with AI support",
      "Unlimited interview sessions",
    ],
  },
  {
    id: "2",
    title: "LifeTime",
    description: "Advanced interview features and real-time code execution.",
    price: "59.99",
    features: [
      "Unlimited real-time collaboration",
      "Advanced code execution with AI support",
      "Unlimited interview sessions",
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
