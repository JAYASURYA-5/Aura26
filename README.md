# 🎉 Aura26 – College Symposium Website

**Aura26** is a modern and interactive web application developed for a college symposium. The website provides participants with a centralized platform to explore symposium events, view event information, access important updates, and interact with the symposium website.

The project focuses on creating an attractive, responsive, and engaging digital experience using modern frontend technologies.

---

## 🌐 About the Project

College symposiums involve multiple technical and non-technical events, participants, schedules, and activities. A well-designed website makes it easier for students and participants to discover events and access symposium information.

**Aura26** was developed as a dedicated college symposium website to provide an engaging online presence for the event.

The website combines modern UI design, animations, interactive components, routing, and 3D visual effects to create an immersive symposium experience.

---

## 🎯 Objectives

- 🎓 Create a professional website for the college symposium.
- 📢 Provide centralized symposium information.
- 🎯 Showcase available technical and non-technical events.
- 📝 Provide interactive forms for participants.
- ⏳ Display a symposium countdown timer.
- 📱 Provide a responsive experience across devices.
- ✨ Create an engaging and modern user interface.
- 🌐 Make event information easily accessible to participants.

---

## ✨ Key Features

### 🏠 Interactive Home Page

The landing page introduces the **Aura26 College Symposium** with an attractive hero section and modern visual effects.

### 🌌 3D Animated Hero Section

The website includes a live WebGL-based animated background powered by **Three.js, React Three Fiber, and Drei**, providing an immersive visual experience.

### 🎯 Events Section

Participants can explore the symposium's available events through dedicated event pages.

The project structure includes routeable pages such as **Index, Events, and Contact**.

### ⏳ Countdown Timer

A countdown timer helps participants keep track of the symposium and event timeline.

### 📝 Interactive Forms

Interactive forms are included to support participant interaction and symposium-related activities.

### 🧭 Navigation

The application uses **React Router** for client-side navigation between different pages.

### 📱 Responsive Design

The website is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📱 Tablet

### ✨ Smooth Animations

**Framer Motion** is used to enhance the website with modern animations and transitions.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React.js** | Frontend user interface |
| **TypeScript** | Type-safe application development |
| **Vite** | Development and build tool |
| **Tailwind CSS** | Styling and responsive design |
| **Shadcn/ui** | Reusable UI components |
| **React Router** | Page routing and navigation |
| **Three.js** | 3D graphics |
| **React Three Fiber** | Three.js integration with React |
| **Drei** | 3D helper components |
| **Framer Motion** | Animations and transitions |
| **Vitest** | Application testing |
| **Git & GitHub** | Version control |

These technologies and dependencies are reflected in the repository configuration and existing README.

---

## 🏗️ System Overview

```text
                 ┌─────────────────────┐
                 │       Visitor       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   Aura26 Website    │
                 │      React UI       │
                 └──────────┬──────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        Home Page        Events        Contact
             │              │              │
             ▼              ▼              ▼
       Hero Section    Event Details   Interactive
             │                            Forms
             ▼
       3D WebGL Scene
```

---

## 📂 Project Structure

The repository follows a modern React application structure with reusable components, pages, hooks, utilities, and assets.

```text
Aura26/
│
├── public/
│   └── Public/static assets
│
├── src/
│   ├── components/
│   │   └── Reusable UI and 3D components
│   │
│   ├── pages/
│   │   └── Application pages
│   │
│   ├── hooks/
│   │   └── Custom React hooks
│   │
│   ├── lib/
│   │   └── Constants and utility functions
│   │
│   └── assets/
│       └── Images, fonts and other assets
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── vitest.config.ts
├── eslint.config.js
└── README.md
```

---

## ⚙️ Requirements

Before running the project, make sure you have:

- **Node.js**
- **npm**
- **Git**
- **Visual Studio Code** or another code editor
- A modern web browser

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/JAYASURYA-5/Aura26.git
```

### 2. Navigate to the Project

```bash
cd Aura26
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The Vite development server will display the local URL in the terminal.

The repository's current development setup uses Vite and the project README specifies `npm run dev` for starting the application.

---

## 🏗️ Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

These are the production commands already configured for the project.

---

## 🧪 Testing

The project uses **Vitest** for testing.

Run the configured tests using:

```bash
npm run test
```

You can also use the Vitest CLI directly if required.

---

## 🎨 User Experience

Aura26 focuses on delivering a visually attractive and interactive experience through:

- 🎨 Modern UI design
- 🌌 3D animated backgrounds
- ✨ Smooth animations
- 📱 Responsive layouts
- 🧭 Easy navigation
- 🎯 Event-focused pages
- ⏳ Countdown functionality
- 📝 Interactive forms
- ⚡ Fast Vite development environment

---

## 🔄 Website Workflow

```text
                Visit Aura26
                     │
                     ▼
                Home Page
                     │
          ┌──────────┼──────────┐
          │          │          │
          ▼          ▼          ▼
        Events    Countdown   Contact
          │          │          │
          ▼          ▼          ▼
    Event Details  Event Date  Contact Form
          │
          ▼
     Participant
      Interaction
```

---

## 📱 Responsive Design

The website is designed to provide a consistent experience across different screen sizes.

### 💻 Desktop

Optimized layout with full navigation, animations, and 3D visual effects.

### 📱 Mobile

Responsive layout for students and participants accessing the symposium website from smartphones.

### 📲 Tablet

Adaptive interface for medium-sized screens.

---

## 🔮 Future Enhancements

The Aura26 platform can be further enhanced with:

- 👥 Participant registration management
- 🎟️ Digital event passes
- 📧 Email confirmation for registrations
- 📊 Admin dashboard
- 🏆 Event results and winners section
- 📸 Event gallery
- 📢 Live announcements
- 🔔 Push notifications
- 📍 Venue and navigation integration
- 📱 Progressive Web App support
- 📊 Participant analytics
- 🔐 Admin authentication
- 🗓️ Detailed event scheduling
- 📄 Digital certificate generation

---

## 🌟 Benefits

Aura26 provides a centralized digital platform for the college symposium and helps participants easily access important event information.

### Key Benefits

- ✔️ Professional symposium presentation
- ✔️ Easy event discovery
- ✔️ Responsive website
- ✔️ Interactive user experience
- ✔️ Modern animations
- ✔️ 3D visual experience
- ✔️ Centralized event information
- ✔️ Easy navigation
- ✔️ Scalable architecture

---

## 🎓 Project Purpose

Aura26 was developed as a **college symposium website project** to demonstrate the use of modern frontend technologies in creating an interactive event platform.

The project provides practical experience in:

- React development
- TypeScript
- Responsive web design
- UI/UX development
- 3D web graphics
- Web animations
- Client-side routing
- Component-based architecture
- Frontend testing
- Git and GitHub

---

## 👨‍💻 Developer

**Jayasurya K**

GitHub:  
https://github.com/JAYASURYA-5

---

## 📌 Repository

**Aura26 GitHub Repository:**  
https://github.com/JAYASURYA-5/Aura26

---

## 📄 License

This project is licensed under the **MIT License**, as specified in the repository.

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

### 🎉 Aura26

**Connect • Compete • Create • Celebrate**

Made with ❤️ for the **Aura26 College Symposium**
