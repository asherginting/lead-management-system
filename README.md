# Lead Management System

A simple fullstack Lead Management application built as a technical assessment.

---

## 🚀 Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📦 Features

* Create new leads
* View all leads
* Basic validation (frontend & backend)
* Clean API structure

---

## ⚙️ Setup Instructions

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

Create `.env` file based on `.env.example`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Run backend:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:4000
```

---

## 🌐 Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Run frontend:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### Create Lead

```
POST /leads
```

### Get Leads

```
GET /leads
```

---

## 👤 Author

**Asher Azriel Ginting**

---
