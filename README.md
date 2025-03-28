# 🎮 GamesPlay Web Application

----

## 📌 Overview
This project is a Single Page Application (SPA) for managing a game collection. It allows users to browse, create, edit, and delete games, as well as register and log in to their accounts. The application interacts with a REST service for user authentication and game management.

---

## 🏗️ Project Structure
### 🔹 The project includes:
#### 🚀 Frontend:
- Built with Vite, React, and JavaScript (ESBuild) for bundling.
#### 🖥️ Backend:
- A local REST service for handling user authentication and game data.
#### 📦 Resources:
- Provided HTML structure, CSS styles, backend server, and images.
  
---

## ✨ Features
### 👥 Guest Users:
- ✅ Browse available games.
- ✅ View game details.
- ✅ Register an account.
- ✅ Log in.

### 🔐 Authenticated Users:
- ✅ Create, edit, and delete their own games.
- ✅ View game details.
- ✅ Add comments to other users' games.
- ✅ Log out.
  
---

## 🚀 Setup and Running
### 1️⃣ Start the Backend Service
- Navigate to the server folder and run:
node server.js
- This will start the local REST API required for the application.

### 2️⃣ Run the Frontend
- Navigate to the React project folder and install dependencies:
npm install
- Then start the development server with Vite:
npm run dev
- This will launch the frontend on a local development server.
  
---

# 📡 API Endpoints

## 🔑 **User Authentication**
- **Login**: `POST /users/login`
- **Register**: `POST /users/register`
- **Logout**: `GET /users/logout`

## 🎮 **Game Management**
- **Get All Games**: `GET /data/games?sortBy=_createdOn%20desc`
- **Get Game by ID**: `GET /data/games/:id`
- **Create Game**: `POST /data/games`
- **Edit Game**: `PUT /data/games/:id`
- **Delete Game**: `DELETE /data/games/:id`

## 💬 **Comments**
- **Get Comments for Game**: `GET /data/comments?where=gameId%3D%22{gameId}%22`
- **Add Comment**: `POST /data/comments`

---

# 🛠️ **Technologies Used**
- 🚀 **Vite** - Fast development and bundling.
- 🎨 **React** - Modern UI framework.
- ⚡ **JavaScript (ESBuild)** - Efficient compilation.
- 📄 **HTML, CSS** - UI structure and styling.
- 🖥️ **Node.js** - Backend service.
- 🌐 **REST API** - Data management.

---

# 🏆 **Credits**
Some of the resources, including HTML structure, CSS styles, images, and the backend service, were provided by SoftUni as part of an educational workshop.

---

# 📜 **License**
This project is MIT Licensed. Feel free to use, modify, and distribute it, but please give credit where due. 🚀
