# 🤖 ChatGPT Clone

A full-stack conversational AI experience built with the MERN stack and powered by the ChatGPT API. This elegant application delivers intelligent responses in a sleek, modern interface that mirrors the original ChatGPT experience.

## ✨ Key Features

- **Real-time AI Conversations** - Interact with advanced AI powered by OpenAI's ChatGPT API
- **Elegant User Experience** - Clean, responsive interface with intuitive design
- **Conversation History** - All chats securely stored in MongoDB for easy access
- **Seamless Performance** - Optimized for speed and reliability across all devices
- **Beautiful Animations** - Subtle typing animations, smooth transitions, and loading effects

## 🛠️ Technology Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### API & Tools
![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

</div>

## 🎨 Beautiful UI/UX Elements

- **Typing Indicators** - Realistic typing animation while the AI generates responses
- **Message Transitions** - Smooth fade-in effects as new messages appear in the chat
- **Pulse Loading** - Subtle pulsing animation during API response waiting periods
- **Theme Transitions** - Elegant color transitions when switching between light and dark modes
- **Micro-interactions** - Button hover effects and subtle feedback animations throughout the interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+) & npm
- MongoDB
- OpenAI API Key ([Get yours here](https://platform.openai.com/))

### Installation Guide

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/vaa_gpt.git
cd vaa_gpt
```

#### 2. Set up backend

```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

#### 3. Set up frontend

```bash
cd ../client
npm install
```

#### 4. Launch the application

Start the backend:
```bash
cd ../server
npm start
```

Start the frontend (in a new terminal):
```bash
cd ../client
npm start
```

Your ChatGPT Clone will be running at `http://localhost:3000`

## 🔧 Customization Options

The application is designed to be easily customizable. Modify the following to match your preferences:

- Theme colors in `client/src/styles/variables.css`
- Chat interface layout in `client/src/components/Chat`
- API parameters in `server/controllers/chatController.js`
- Animation timing and effects in `client/src/components/animations`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the ChatGPT API
- The MERN stack community for excellent documentation
- Framer Motion for the smooth animation library
- All contributors who have helped shape this project

---

<p align="center">Built with ❤️ by <a href="https://github.com/AnmolSharma2002">Your Name</a></p>
