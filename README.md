# ChatAI – AI Chatbot Landing Page

A responsive, single-page marketing site for a fictional AI coding-assistant product called **ChatAI**. It's built with **React**, **Tailwind CSS** and **Vite**, and shows a modern dark-themed SaaS landing page with smooth-scroll navigation, an animated hero, and a mock chat interface.

**Live demo:** https://chat-ai-qasim.vercel.app/

> This is a front-end UI project. The chat window in the Demo section shows a pre-scripted conversation and is not connected to a language model or backend.

---

## Page sections

| Section | Component | What it shows |
|---------|-----------|---------------|
| Navbar | `Navbar.jsx` | Sticky, blurred header with a logo and smooth-scroll links. It collapses into a hamburger drawer on mobile. |
| Hero | `Hero.jsx` | Gradient headline, product intro, call-to-action buttons and a **Lottie** coding animation |
| Features | `Features.jsx` | Six-card grid with **Lucide** icons |
| Demo | `Demo.jsx` | Chat-style UI with user/bot message bubbles, timestamps and a message input |
| Pricing | `Pricing.jsx` | Three tiers (Free / Pro / Enterprise) with feature checklists and a "Most Popular" badge on Pro |
| About Us | `AboutUs.jsx` | Mission statement with team imagery |
| Footer | `Footer.jsx` | Link columns generated from `src/constant/index.jsx` |

## How it works

- **`App.jsx`** stacks the section components inside a centred `max-w-7xl` container.
- **Navigation:** each section has an `id` (`features`, `demo`, `pricing`, `about`). The navbar uses `react-scroll`'s `<Link>` to animate scrolling to it, with an offset so the sticky header doesn't cover the section title.
- **Mobile menu:** a `useState` flag toggles the drawer, and clicking a link closes it.
- **Data-driven UI:** features, pricing tiers, chat messages and footer links are defined as arrays and rendered with `.map()`, so content can be edited without touching the markup.
- **Styling:** everything uses Tailwind utility classes, including gradient text (`bg-clip-text`), backdrop blur, and responsive breakpoints (`sm` / `md` / `lg`).

## Project structure

```
src/
├── App.jsx            # Page layout
├── main.jsx           # React entry point
├── components/        # Navbar, Hero, Features, Demo, Pricing, AboutUs, Footer
├── constant/index.jsx # Footer link data
└── assets/            # Logo, images, Lottie animation (coding.json)
```

## Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/Qasim1507/ChatAI.git
cd ChatAI
npm install
npm run dev        # start the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Tech stack
React 18 · Vite 5 · Tailwind CSS 3 · react-scroll · lottie-react · lucide-react · deployed on Vercel
