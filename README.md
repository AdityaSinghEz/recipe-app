# 🥗 NourishKit — Recipe App

A modern, goal-based recipe discovery app built from scratch as a learning project — progressing from vanilla HTML/CSS/JS to a full MERN stack application.

## 🎯 About

NourishKit helps users find recipes based on their personal goals — whether that's building muscle, losing weight, recovering from illness, or just eating on a budget. Instead of generic recipe browsing, users filter by **intent**.

## ✨ Features

### Current (Phase 1 & 2 — Vanilla JS)
- 🏡 **Landing page** with hero section and live search
- 🎯 **Smart goal-based filtering** — High Protein, Weight Loss, Bulking, Healthy Snacks, Recovery, Low Calorie, Vegetarian, Quick Meals, Budget
- 🔍 **Real-time search** that works in combination with active filters
- 🍽️ **Dynamic recipe card grid** rendered from a structured data source
- 📊 Calorie, protein, and prep time info on every recipe
- ❤️ **Favourites system** with `localStorage` persistence (survives page refresh)
- 🗂️ **Category browsing** (Breakfast, Lunch, Dinner, Snacks, Smoothies, Desserts)
- 📱 **Fully responsive** — mobile, tablet, and desktop layouts
- 🎨 Custom design system with CSS variables, Playfair Display + DM Sans typography

### In Progress (Phase 3 — React)
- ⚛️ Component-based rewrite using React + Vite
- 🔄 State-driven filtering and search (`useState`)
- 🧭 React Router for recipe detail pages

### Planned
- 🟢 **Node.js + Express** REST API
- 🍃 **MongoDB** database for recipes and users
- 🔐 **Authentication** (JWT) with protected routes and per-user favourites
- 📈 Real nutrition data via external API (Nutritionix/USDA)
- 🤖 AI-powered recipe suggestions
- 📅 Saved meal plans
- ☁️ Deployment (Vercel + Render + MongoDB Atlas)

## 🛠️ Tech Stack

**Frontend**
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- React + Vite
- React Router

**Backend** *(planned)*
- Node.js, Express
- MongoDB, Mongoose
- JWT, bcrypt

**External APIs** *(planned)*
- Nutritionix / USDA FoodData Central
- Anthropic API (AI suggestions)

**Tooling**
- Git & GitHub
- npm

## 📁 Project Structure

```
recipe-app/
├── css/
│   └── style.css
├── js/
│   ├── recipes.js      # recipe data
│   └── app.js           # rendering, filtering, search, favourites
├── images/
├── pages/
└── index.html
```

## 🚀 Getting Started

Clone the repo and open `index.html` directly in your browser — no build step required for the vanilla version.

```bash
git clone https://github.com/AdityaSinghEz/recipe-app.git
cd recipe-app
```

## 📖 What I Learned

This project was built incrementally to genuinely understand each layer of modern web development rather than copying tutorials:

- Semantic HTML structure and accessibility basics
- CSS Grid, Flexbox, custom properties, and responsive design
- DOM manipulation, event delegation, and `localStorage`
- Designing a data model (`tags`, `calories`, `protein`) that scales cleanly from a JS array → MongoDB collection
- Writing reusable filter logic that works identically across plain JS and React

## 🗺️ Roadmap

- [x] Static HTML/CSS UI
- [x] Vanilla JS filtering, search, favourites
- [ ] React component rewrite
- [ ] React Router + detail page
- [ ] Express + MongoDB backend
- [ ] Authentication
- [ ] Nutrition API integration
- [ ] AI recipe suggestions
- [ ] Deployment

## 👤 Author

**Aditya Singh**
- GitHub: [@AdityaSinghEz](https://github.com/AdityaSinghEz)
- LinkedIn: [aditya-singh-a72723327](https://linkedin.com/in/aditya-singh-a72723327)

---

*Built as a hands-on learning project — HTML/CSS/JS → React → Node/Express → MongoDB → Deployment.*