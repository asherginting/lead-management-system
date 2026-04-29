# 🚀 Lead Management System

---

## 🌐 Live Demo

* 🔗 **Frontend (Vercel)**
  https://lead-management-system-nine-tau.vercel.app/

* 🔗 **Backend API (Railway)**
  https://lead-management-system-production-c38c.up.railway.app/

---

## 🧰 Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Deployment

* Vercel (Frontend)
* Railway (Backend)
* MongoDB Atlas (Database)

---

## ✨ Features

* Create new leads
* View all leads
* Form validation (frontend & backend)
* RESTful API design
* Clean and modular code structure
* Environment-based configuration

---

## 📁 Project Structure

```
lead-management-system/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   └── ...
│   └── ...
│
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone Repository

```bash
git clone git@github.com:asherginting/lead-management-system.git
cd lead-management-system
```

---

## 🖥️ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:4000
```

---

## 🌐 Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### Create Lead

```
POST /leads
```

### Get All Leads

```
GET /leads
```

### Health Check

```
GET /health
```

---

## 🛡️ Validation

### Backend (Mongoose)

* Name length validation
* Email format validation
* Status enum validation

### Frontend

* Required fields validation
* Email format check
* Basic UX feedback

---

## 📌 Notes

* MongoDB Atlas is used as the cloud database.
* Ensure your IP is whitelisted (`0.0.0.0/0`) for development.
* Environment variables are required for both frontend and backend.

---

## 👤 Author

**Asher Azriel Ginting**
