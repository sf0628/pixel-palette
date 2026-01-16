# SophiaLand — Personal Website

Welcome to **SophiaLand** — my personal website showcasing projects, experience, and personal content.  

🌐 **Live site:** [https://sophialand.org](https://sophialand.org)

---

## Table of Contents

- [Technologies](#technologies)  
- [Architecture & Patterns](#architecture--patterns)  
- [Installation & Development](#installation--development)  
- [Available Scripts](#available-scripts)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Technologies

### Core Languages
- **TypeScript** — primary language  
- **JavaScript** — configuration files & scripts  
- **HTML & CSS** — markup & styling  
- **JSX/TSX** — React components  

### Frameworks & Libraries
- **React (v18.3.1)** — UI framework  
- **React DOM (v18.3.1)** — rendering engine  
- **React Router DOM (v6.30.1)** — client-side routing  

### Build Tools
- **Vite (v5.4.19)** — fast build tool & dev server  
- **@vitejs/plugin-react-swc (v3.11.0)** — React plugin with SWC  

### UI Component Libraries
- **Radix UI** — headless components (Accordion, Dialog, Popover, Tabs, Tooltip, and more)  
- **shadcn/ui** — component system built on Radix UI  
- **Lucide React (v0.462.0)** — icon library  

### Styling & CSS
- **Tailwind CSS (v3.4.17)** — utility-first styling  
- **PostCSS (v8.5.6)** & **Autoprefixer (v10.4.21)** — CSS processing  
- **tailwindcss-animate (v1.0.7)** — animations  
- **@tailwindcss/typography (v0.5.16)** — typography plugin  
- **tailwind-merge (v2.6.0)** — merge Tailwind classes  
- **class-variance-authority (v0.7.1)** — component variants  
- **clsx (v2.1.1)** — conditional class names  

### Form Handling & Validation
- **React Hook Form (v7.61.1)** — form state management  
- **@hookform/resolvers (v3.10.0)** — validation resolvers  
- **Zod (v3.25.76)** — schema validation  

### State Management & Data Fetching
- **TanStack Query / React Query (v5.83.0)** — server state caching  

### Animation & Motion
- **Framer Motion (v12.24.7)** — declarative animations  

### Additional UI Components
- **Embla Carousel React (v8.6.0)** — carousel  
- **React Day Picker (v8.10.1)** — date picker  
- **React Resizable Panels (v2.1.9)** — resizable layouts  
- **Sonner (v1.7.4)** — toast notifications  
- **Vaul (v0.9.9)** — drawer component  
- **CMDK (v1.1.1)** — command menu  
- **Input OTP (v1.4.2)** — OTP input  
- **Recharts (v2.15.4)** — charts & graphs  
- **next-themes (v0.3.0)** — theme management  

### Utilities
- **date-fns (v3.6.0)** — date manipulation  
- **pdf-parse (v2.4.5)** — PDF parsing  
- **caniuse-lite (v1.0.30001762)** & **baseline-browser-mapping (v2.9.12)** — browser compatibility  

### Development Tools
- **TypeScript (v5.8.3)** — type checking  
- **ESLint (v9.32.0)** + plugins — linting & code quality  
- **nodemon (v3.1.11)** — file watching  
- **lovable-tagger (v1.1.13)** — dev tool for tagging components  

### Type Definitions
- `@types/node`, `@types/react`, `@types/react-dom`  

### Package Managers
- **npm** & **Bun**  

---

## Architecture & Patterns

- **Component-based architecture** with reusable UI components  
- **Path aliasing**: `@/* → ./src/*` for clean imports  
- **Module system**: ES modules (`import` / `export`)  
- **State & data fetching**: React Query for server state  
- **Form & validation patterns**: React Hook Form + Zod  
- **Animations**: Framer Motion for smooth UI transitions  

---

## Installation & Development

Clone the repository:

```bash
git clone https://github.com/your-username/personal-website.git
cd personal-website
