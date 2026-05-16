# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend framework |
| TypeScript | Type-safe development |
| Vite | Build tool |
| React Router v6 | Client-side routing |
| Tailwind CSS | Styling |
| Lucide React | Icons |

---

## Project Structure

```
src/
├── components/     # UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── pages/          # Route pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── types/          # TypeScript types
├── App.tsx         # Main app with routing
├── main.tsx       # Entry point
└── index.css      # Global styles

Config files:
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Features

- **Responsive Design** - Works on all devices
- **React Router** - Smooth page navigation
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type-safe code
- **Lucide Icons** - Beautiful icon set

---

## Customization

### Personal Information

Edit `src/config.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  email: 'hello@example.com',
  phone: '+1 234 567 890',
  location: 'New York, USA',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
}
```

### Projects

Edit `src/data.ts` - projects array:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Description here',
    tags: ['React', 'Node.js'],
  },
]
```

### Skills

Edit `src/data.ts` - skills array:

```typescript
export const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
]
```

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#0f172a",
  secondary: "#1e293b",
  accent: "#3b82f6",
  "accent-hover": "#2563eb",
},
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Prerequisites

- Node.js v18 or higher
- npm or yarn

---

## License

MIT License - free to use and modify
