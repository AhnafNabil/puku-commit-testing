# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works seamlessly on all devices
- **React Router** - Client-side routing for smooth navigation
- **Tailwind CSS** - Utility-first styling for rapid development
- **TypeScript** - Type-safe code for better maintainability
- **Lucide React** - Beautiful, customizable icons

## Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── pages/           # Route pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd puku-commit-testing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Updating Personal Information

Edit `src/config.ts` to update your personal details:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  email: 'hello@example.com',
  // ... other settings
}
```

### Adding Projects

Edit `src/data.ts` to add or modify projects:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description here',
    tags: ['React', 'Node.js'],
  },
  // ... more projects
]
```

### Modifying Skills

Update the skills array in `src/data.ts`:

```typescript
export const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  // ... more skills
]
```

## Color Customization

Modify `tailwind.config.js` to change the color theme:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0f172a",
      secondary: "#1e293b",
      accent: "#3b82f6",
      "accent-hover": "#2563eb",
    },
  },
},
```

## License

This project is open source and available under the MIT License.