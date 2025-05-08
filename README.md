## 🧴 Kare – Personalized Skincare App (Frontend)

**Care** is a personalized skincare application designed to help users discover and track skincare routines tailored to their unique skin profile. Built with a focus on user experience and modularity, it’s a front-end single-page application that interfaces with a custom API.

This repository contains the **frontend** codebase, built with **React Native (Expo)**. The backend lives in a separate repository [linked below](#🔗https://github.com/kidmpukane/kare_backend).

---


---

### 🌟 Features

* Personalized onboarding flow to collect user skin data
* Smart product suggestions based on selected skin concerns
* Routine tracking and habit management
* Clean, mobile-optimized UI using custom design

---

### 🧠 Purpose

This project was designed as a way to explore:

* End-to-end product design thinking
* API communication and data handling
* Frontend best practices in React Native
* The intersection of personalization and e-commerce

It also serves as a portfolio piece to demonstrate full-stack capability and product reasoning.

---

### 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server (Expo)
npm run start
```

Ensure you have the Expo CLI installed globally:

```bash
npm install -g expo-cli
```

> ⚠️ The app communicates with a separate backend API. You'll need to clone and run the [backend repository](#🔗-related-repositories) for full functionality.

---

### 🛠️ Tech Stack

* React Native (Expo)
* React Navigation
* Context API for state management
* Custom UI components

---

### 🔗 Related Repositories

* [Care – Backend API (Express, Node.js)](https://github.com/yourusername/care-backend)

---

### 📄 License

MIT – feel free to use and adapt with credit.

---

Now, for the **backend repo**, here’s the lighter version:

---

## 🧴 Care – Personalized Skincare App (Backend)

This repository contains the **backend API** for the **Care** app — a personalized skincare platform.

It was built with **Django**, designed to handle user data, product logic, and routine scheduling for the React Native frontend [available here]((https://github.com/kidmpukane/kare_backend)).

---

### 🔧 Features

* RESTful API design
* User data modeling (skin profile, preferences)
* Product recommendation logic (basic version)
* Routine management endpoints
* Clean folder structure and environment configs

---

### 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start local server
npm run dev
```

Rename `.env.example` to `.env` and add the necessary config variables.

---

### 🔗 Related Repositories

* [Care – Frontend App (React Native)](https://github.com/yourusername/care-frontend)
