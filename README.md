# premium-psychology-website

A modern, responsive React website built with Vite and Tailwind CSS for a premium psychology practice. This repository contains the frontend application scaffolded for fast development and production builds.

## Tech stack
- React (v18)
- Vite
- Tailwind CSS
- TypeScript (dev dependency)
- ESLint
- Stripe JS (payments integration)
- react-hook-form, react-router-dom, lucide-react

## Prerequisites
- Node.js 18+ recommended
- npm or yarn

## Quick start
1. Install dependencies
   npm install

2. Run development server
   npm run dev

3. Lint the project
   npm run lint

4. Build for production
   npm run build

5. Preview production build locally
   npm run preview

## Project structure (common)
- src/ — application source code
- public/ — static assets
- package.json — scripts & dependencies
- vite.config.* — Vite configuration
- tailwind.config.* — Tailwind configuration
- eslint.config.* — ESLint configuration

## Scripts (from package.json)
- dev: vite
- build: vite build
- preview: vite preview
- lint: eslint .

## Contributing
- Follow project linting rules and run `npm run lint` before opening PRs.
- Create feature branches and keep commits focused and atomic.

## Notes
- The project is configured as an ES module ("type": "module").
- Update dependency versions carefully and run the test/dev server to verify changes.

## License
ISC
