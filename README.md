# UX Portfolio

A modern UX portfolio website built with the [T3 Stack](https://create.t3.gg/) and bootstrapped with `create-t3-app`.

## Getting Started

This project provides a solid foundation for building a professional UX portfolio. We've kept the setup simple so you can start with the basic scaffolding and add additional features as needed.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Bun](https://bun.sh/) (modern JavaScript runtime and package manager)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd UX-Portfolio

# Install dependencies
bun install

# Copy environment variables
cp .env.example .env.local

# Start the development server
bun run dev
```

## Tech Stack

This project is built with modern web technologies to ensure excellent performance and developer experience:

- **[Next.js](https://nextjs.org)** - React framework with server-side rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[tRPC](https://trpc.io)** - End-to-end typesafe APIs
- **[React Query](https://tanstack.com/query)** - Data fetching and state management

## Project Structure

```
src/
├── app/              # Next.js app router pages and layouts
├── components/       # Reusable React components
├── server/          # Backend API and tRPC routers
└── trpc/            # tRPC configuration
```

## Development

### Available Scripts

```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
bun run typecheck    # Run TypeScript type checking
bun run format:write # Format code with Prettier
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure your environment variables. This file should not be committed to version control.

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), check out these resources:

- [Official Documentation](https://create.t3.gg/)
- [T3 Stack Tutorials](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
- [create-t3-app GitHub Repository](https://github.com/t3-oss/create-t3-app)

If you need help, join the [T3 Discord Community](https://t3.gg/discord) and ask questions!

## Deployment

Follow the deployment guides for your preferred platform:

- [Vercel](https://create.t3.gg/en/deployment/vercel)
- [Netlify](https://create.t3.gg/en/deployment/netlify)
- [Docker](https://create.t3.gg/en/deployment/docker)

## Contributing

Feel free to submit issues and enhancement requests!
