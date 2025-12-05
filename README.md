# 🌤 Weather Forecast App

A simple, responsive weather app built with **HTML, CSS, and Vanilla JavaScript** that fetches **real-time weather data** for any city using the **OpenWeatherMap API**. It also shows the **API response time** in milliseconds.

---

## 🚀 Features

- Search weather by **city name** (e.g. *Pune, Mumbai, Bengaluru*).
- Displays:
  - 🌡 **Temperature** (in °C, metric units)
  - 🌥 **Weather description**
  - 💧 **Humidity**
  - 💨 **Wind speed** (m/s)
- Shows **API response time** using `performance.now()`.
- Handles:
  - Empty input (alerts user)
  - Invalid city names (`City not found`)
  - Network / API errors (user-friendly error message)
- Clean **glassmorphism UI** with a modern look.
- Supports pressing **Enter key** to trigger search.

---

## 🧩 Tech Stack

- **HTML5** – Structure and layout
- **CSS3** – Styling and responsive design
- **JavaScript (ES6+)** – API calls and DOM manipulation
- **OpenWeatherMap API** – Live weather data

---

## 📁 Project Structure

```bash
weather-app/
├── index.html     # Main HTML file (UI)
└── main.js        # JavaScript logic (API calls & DOM updates)
