# Aura26 Web Application

This repository contains the **Aura26** landing page built with React, Vite, Tailwind CSS and a 3D animated background using `@react-three/fiber` and `@react-three/drei`.

## 🚀 Features

- Responsive React UI powered by Tailwind CSS and Shadcn/ui components
- Animated hero section with a live WebGL background
- Countdown timer, navigation, and interactive forms
- Uses React Router for page routing
- 3D assets handled via Three.js and React Three Fiber
- Built with TypeScript for strong typing

## 🛠 Installation

```bash
# clone the repo
git clone https://github.com/JAYASURYA-5/Aura26.git
cd Aura26

# install dependencies
npm install
```

## 🔧 Development

Start the Vite dev server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or another port if 3000 is taken).

## ✅ Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
  components/     # reusable UI & 3D components
  pages/          # routeable pages (Index, Events, Contact, etc.)
  hooks/          # custom React hooks
  lib/            # constants & utility functions
  assets/         # static images and fonts
```

## 📦 Dependencies Highlights

- `react`, `react-dom` 18
- `vite` + `@vitejs/plugin-react-swc`
- `tailwindcss` with shadcn/ui components
- `three`, `@react-three/fiber`, `@react-three/drei`
- `framer-motion` for animations
- `react-router-dom` for client routing
- `vitest` for testing

## 💡 Notes

- Browserslist data may show warnings; run `npx update-browserslist-db@latest` regularly.
- Three.js version locked to 0.152.0 for compatibility with downstream packages.

## 📄 License

This project is licensed under the MIT License.

---

Enjoy building Aura26! 🎉
