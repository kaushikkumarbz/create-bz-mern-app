# 🚀 create-bz-mern-app

A modern fullstack boilerplate powered by:

- ⚛️ **Frontend**: Vite + React + Mantine  
- 🔐 **Authentication**: Google Login + JWT  
- 🌐 **Backend**: Node.js + Express + MongoDB (MERN Stack)

---

## 📦 Usage

```bash
npx create-bz-mern-app my-project
```

This will scaffold a fullstack MERN project with the following structure:

```
my-project/
├── frontend/      # Vite + React + Mantine
└── backend/       # Node.js + Express + MongoDB
```

---

## ⚙️ Setup Instructions

### 1. Set Up Environment Variables

#### 📁 `backend/.env`

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_secure_jwt_secret
```

#### 📁 `frontend/.env`

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_BZENV=development  # or "production"
VITE_DEV_PROXY=http://localhost:3000
```

---

### 2. Install Dependencies and Start App

#### ➤ Frontend

```bash
cd frontend
npm install
npm run build
```

#### ➤ Backend

```bash
cd ../backend
npm install
npm start
```

---

## 📁 .env.example Files

You can optionally include `.env.example` files in both folders for easier onboarding:

### `frontend/.env.example`

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_BZENV=development
VITE_DEV_PROXY=http://localhost:3000
```

### `backend/.env.example`

```env
MONGODB_URI=mongodb://localhost:27017/your-db
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_secret
```

---


## 🛠️ Tech Stack

- **Frontend**: Vite, React, Mantine, Google OAuth2
- **Backend**: Node.js, Express, MongoDB, JWT
- **Tooling**: ESLint, Prettier, dotenv

---

## 🙌 Contributing

Feel free to fork and create PRs to improve the boilerplate.

---

## 📄 License

MIT © 2025 Kaushikk
