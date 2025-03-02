# Stock Trading Platform (Zerodha Clone)

A **MERN stack** project that replicates the basic functionality and design of the Zerodha trading platform. This clone includes features like a dashboard with wishlist, buy and sell functionality, order management, holdings, positions, and interactive charts for a detailed trading experience.

## 🚀 Live Demo

🔗 **Visit:** [Live Link](#) *([Replace with actual deployed link](https://stock-trading-platform020325.onrender.com))*

## 📸 Screenshots

&#x20;*(![image](https://github.com/user-attachments/assets/031d6fff-1ecd-45e9-8b45-bd885163216b)
)*  *(Replace with actual image path)*
![image](https://github.com/user-attachments/assets/746597fd-f1f0-44a1-a6b8-db41ebb5555c)

## ✨ Features

- **Landing Page**: Includes sections such as About, Pricing, Products, Signup, Support, Footer, and Navbar.
- **User Authentication**: Secure login and signup with JWT-based authentication.
- **Dashboard**: Displays wishlist, holdings, positions, and detailed stock charts.
- **Orders & Transactions**: Allows users to place and manage buy/sell orders.
- **Real-time Data Updates**: Uses WebSockets (or polling) to fetch live stock prices.
- **Charts & Insights**: Interactive stock performance charts using Chart.js.
- **State Management**: Utilizes React Hooks (`useState`, `useEffect`, `useContext`) and a `GeneralContext` provider.
- **Responsive UI**: Built with **Material-UI**, **Bootstrap**, and **CSS Flexbox/Grid**.
- **Secure API**: Uses JWT for authentication and bcrypt for password hashing.
- **RESTful APIs**: Implements structured API routes for handling user authentication, stock data, orders, and portfolio details.
- **Error Handling & Validation**: Backend validation using `express-validator`.

## 🛠️ Tech Stack

### **Frontend**

- **React.js** (Vite for development)
- **React Router** (for navigation)
- **Material-UI** (for UI components)
- **Bootstrap** (for responsive design)
- **Chart.js** (for stock charts)
- **React-Toastify** (for notifications)

### **Backend**

- **Node.js & Express.js** (for API development)
- **MongoDB & Mongoose** (for database management)
- **JWT Authentication** (for secure login/signup)
- **bcrypt.js** (for password hashing)
- **CORS & Helmet** (for security enhancements)

### **Deployment**

- **Frontend**: Render
- **Backend**: Render
- **Database**: MongoDB Atlas

## 📖 Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Atharva718/zerodha-clone.git
cd zerodha-clone
```

### **2️⃣ Install Dependencies**

#### **Frontend**

```bash
cd frontend
npm install
```

#### **Backend**

```bash
cd backend
npm install
```

### **3️⃣ Setup Environment Variables**

Create a `.env` file in the backend folder and add:

```env
PORT=3002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the Application**

#### **Start Backend**

```bash
cd backend
npm start
```

#### **Start Frontend**

```bash
cd frontend
npm run dev
```

#### **Start Dashboard**

```bash
cd dashboard
npm start
```

## 🧪 Testing

This project uses **Jest** and **React Testing Library** for testing React components and API functionality.

Run tests with:

```bash
npm test
```

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork** the repository
2. **Clone** it locally: `git clone https://github.com/your-username/zerodha-clone.git`
3. Create a new **feature branch**: `git checkout -b feature-branch`
4. **Commit** your changes: `git commit -m "Add new feature"`
5. **Push** to your fork: `git push origin feature-branch`
6. **Submit a Pull Request** 🚀

## 📜 License

This project is open-source and available under the **MIT License**.

---

🔗 **GitHub Repo:** [Atharva718/zerodha-clone](https://github.com/Atharva718/zerodha-clone)

