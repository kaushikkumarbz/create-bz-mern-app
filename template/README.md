
# 🚀 BZ MERN Fullstack Template

  

This is the project template used by [`create-bz-mern-app`](https://www.npmjs.com/package/create-bz-mern-app).

  

## 📦 What's Included

  

- ⚛️ **Frontend**: Vite + React + Mantine

- 🔐 **Authentication**: Google Login + JWT

- 🌐 **Backend**: Node.js + Express + MongoDB

  

## 📁 Folder Structure

  

```

project-root/

├── frontend/ # Vite + React + Mantine

├── backend/ # Node.js + Express + MongoDB

└── package.json # Root dev runner

```

  

## ⚙️ Setup Instructions

  

### 1. Environment Variables ( Make sure .env values are updated )

  

#### 📁 `backend/.env`

  

```

MONGODB_URI=your_mongodb_connection_string

PORT=3000

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

JWT_SECRET=your_secure_jwt_secret

```

  

#### 📁 `frontend/.env`

  

```

VITE_GOOGLE_CLIENT_ID=your_google_client_id

VITE_BZENV=development

VITE_DEV_PROXY=http://localhost:3000

```

  

---

  

### 2. Run Project

  

```bash

npm run dev

```

  

This command does the following:

  

1. Installs frontend dependencies and builds the frontend

2. Installs backend dependencies

3. Starts the backend server which servers frontend pages as well

  

 ---
 ### 3. Run Frontend and Backend separately for development.
##### One time command to install dependencies. 

```bash
cd frontend 
npm install
cd ../backend 
npm install

```

#### To run frontend in development mode
```
cd frontend 
npm run dev
```

#### To run backend in development mode
```
cd backend 
npm start
```

 

---

  

MIT © 2025 Kaushikk