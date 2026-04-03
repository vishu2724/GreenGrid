# 🌱 Green Grid – Resource Exchange Platform

Green Grid is a full-stack web application that allows users to manage and share equipment efficiently. Users can browse available resources, update their availability status, and manage equipment in a simple and intuitive interface.

---

## 🚀 Features

### 🔧 Equipment Management

* Add new equipment with details and image
* Edit existing equipment information
* Delete equipment from the system

### 📊 Availability Tracking

* Mark equipment as **Available** or **In Use**
* Track who is currently using the equipment

### 🔍 Search & Filter

* Search equipment by name
* Filter by availability status

### 🧠 Smart UI/UX

* Clean and responsive design
* Real-time updates with API integration
* Global navigation bar for smooth routing

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React.js
* Tailwind CSS

### Backend

* Next.js API Routes
* MongoDB
* Mongoose

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/green-grid.git

# Navigate to project folder
cd green-grid

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
```

---

## 📁 Folder Structure

```
/app
  /api
    /equipment
      route.js
      /[id]
        route.js
  /add
  /edit/[id]
/components
/lib
/models
```

---

## 📌 API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | /api/equipment     | Get all equipment    |
| POST   | /api/equipment     | Add new equipment    |
| GET    | /api/equipment/:id | Get single equipment |
| PATCH  | /api/equipment/:id | Update equipment     |
| DELETE | /api/equipment/:id | Delete equipment     |

---

## 🎯 Key Highlights

* Full CRUD functionality (Create, Read, Update, Delete)
* Dynamic routing using Next.js App Router
* Real-time UI updates with backend integration
* Clean and scalable code structure

---

## 📹 Demo 

https://drive.google.com/file/d/1PGAC0559TbZ7lcjscPUPXlEeZ-6DT82G/view?usp=sharing

---

## 🙌 Author

**Vishant Bhardwaj**

