# UGExim Frontend

React + TypeScript SPA for the UGExim Integrated Client Management & Loan Operations Platform.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** — build tool
- **Tailwind CSS v4** — styling
- **React Router v7** — routing
- **TanStack Query v5** — server state
- **Axios** — HTTP client
- **React Hook Form** + **Zod** — forms and validation
- **Lucide React** — icons
- **Prettier** — code formatting

---

## Getting Started (New Developer)

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [Git](https://git-scm.com/)

Verify:

```bash
node --version
npm --version
git --version
```

---

### 2. Clone the Repository

```bash
git clone <repository-url>
cd UGExim_Frontend
```

---

### 3. Set Up the `dev` Branch Locally

The repository has two main branches on GitHub: `main` and `dev`. All work goes through `dev` — never push directly to `main`.

When you first clone, you will only see `main` locally. Run these commands to pull down the `dev` branch:

```bash
git fetch origin
git checkout --track origin/dev
```

**What this does:**
- `git fetch origin` — downloads all branch information from GitHub to your machine without changing any files.
- `git checkout --track origin/dev` — creates a local `dev` branch linked to GitHub's `dev` and switches to it. You are now on `dev` and in sync with the remote.

---

### 4. Install Dependencies

`node_modules` is not committed to git. You need to install packages locally:

```bash
npm install
```

---

### 5. Set Up Environment Variables

Create a `.env.local` file in the project root (this file is gitignored and never committed):

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in the values:

```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=UGExim Platform
```

---

### 6. Run the Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**

---

## Branch Workflow

We follow a simple feature-branch workflow:

```
feature/your-feature  →  local dev  →  origin/dev  →  (release) origin/main
```

### Starting New Work

Always make sure your local `dev` is up to date before branching:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

Use descriptive branch names, e.g. `feature/client-onboarding`, `feature/loan-tracking`.

### Finishing Your Work

When your feature is ready:

```bash
# 1. Stage and commit your changes on your feature branch
git add .
git commit -m "feat: describe what you built"

# 2. Switch to dev and merge your feature in
git checkout dev
git merge feature/your-feature-name

# 3. Push dev to GitHub
git push origin dev
```

Your feature branch stays local — it is never pushed to GitHub.

### Pulling a Colleague's Changes

Before starting a new piece of work, always pull the latest `dev`:

```bash
git checkout dev
git pull origin dev
```

Then create your feature branch as above.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── assets/          # Images and icons
├── components/      # Shared UI components
│   ├── ui/          # Base components (buttons, inputs, modals, etc.)
│   ├── layout/      # Page layout components (sidebar, navbar, etc.)
│   ├── forms/       # Reusable form components
│   ├── tables/      # Table components
│   ├── charts/      # Chart components
│   └── feedback/    # Alerts, toasts, loaders
├── features/        # Feature modules (one folder per SRS module)
│   ├── auth/
│   ├── clients/
│   ├── portal/
│   ├── applications/
│   ├── documents/
│   ├── pipeline/
│   ├── credit-appraisal/
│   ├── approval-workflow/
│   ├── legal/
│   ├── loans/
│   ├── disbursement/
│   ├── communications/
│   ├── dashboards/
│   ├── portfolio/
│   └── admin/
├── services/        # API call functions
├── hooks/           # Shared custom React hooks
├── context/         # React context providers
├── store/           # Global state
├── router/          # Route definitions
├── types/           # TypeScript type definitions
├── utils/           # Utility/helper functions
├── constants/       # App-wide constants (roles, statuses, routes)
└── config/          # Axios instance, query client, env config
```
