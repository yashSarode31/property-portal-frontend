# 🏠 Property Portal – Frontend

A frontend-only property buying and selling web application built using **React**, **Vite**, **Tailwind CSS v4**, **shadcn/ui**, and **React Router**.  
The project demonstrates complete **buyer-side** and **seller-side** user flows with a clean, scalable frontend architecture.

---

## 📌 Project Overview

This project allows users to:
- Browse available properties
- View detailed property information
- Access authentication pages (UI only)
- Manage seller listings through a dashboard
- Add new properties via a form

⚠️ **Note:** This is a **frontend-only implementation**. Backend integration (authentication, database, APIs) is planned for a future phase.

---

## 🚀 Live Demo

🔗 **Deployed on Vercel:**  
👉 https://your-vercel-link.vercel.app

---

## 🛠 Tech Stack

- **React** (with Vite)
- **Tailwind CSS v4** (Vite plugin)
- **shadcn/ui**
- **React Router**
- **JavaScript**
- **Vercel** (Deployment)

---

## 📂 Project Structure

src/
├── components/
│ └── ui/ # shadcn UI components
├── layouts/
│ └── MainLayout.jsx # Common layout with Navbar
├── pages/
│ ├── Home.jsx
│ ├── Properties.jsx
│ ├── PropertyDetails.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── Dashboard.jsx
│ └── AddProperty.jsx
├── index.css
└── main.jsx

---

## 🔄 Application Flow

### Buyer Flow
Home → Properties → Property Details

### Seller Flow
Login / Register (UI)
→ Seller Dashboard
→ Add Property (Form UI)

---

## ✨ Features Implemented

### 🧑‍💼 Buyer Side
- Home page with hero section and featured properties
- Property listing page with filter UI (UI only)
- Property details page using dynamic routing (`/properties/:id`)

### 🏠 Seller Side
- Seller dashboard with stats (dummy data)
- Add property form (console logs data on submit)

### 🔐 Authentication (UI Only)
- Login page
- Register page

---

## ⚠️ Current Limitations

- No backend / database
- No real authentication or authorization
- No API integration
- Filters are UI-only
- Data is hardcoded for demonstration

These are intentionally left out and planned for future development.

---

## 🧪 Local Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/property-portal-frontend.git
cd property-portal-frontend
```
2. Install dependencies
```
npm install
```

3.Start development server
```
npm run dev
```
