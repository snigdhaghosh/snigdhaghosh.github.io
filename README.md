# snigdhaghosh.github.io

Personal website and portfolio deployed at [https://snigdhaghosh.github.io](https://snigdhaghosh.github.io)

## Structure

- `frontend/` - React application with Tailwind CSS and shadcn/ui components
- `backend/` - Python backend server (optional)
- `.github/workflows/` - GitHub Actions for automated deployment

## Development

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The development server will start at http://localhost:3000

### Backend Setup (optional)

```bash
cd backend
pip install -r requirements.txt
python server.py
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions when you push to the main branch.

### Manual Deployment Options

#### Option 1: Using GitHub Actions (Recommended)
- Simply push your changes to the main branch
- GitHub Actions will automatically build and deploy your site

#### Option 2: Using the build script
```bash
./build.sh
```

#### Option 3: Using npm scripts
```bash
cd frontend
npm run deploy
```

## Configuration

The site is configured for GitHub Pages deployment with:
- Homepage set to `https://snigdhaghosh.github.io` in `package.json`
- GitHub Actions workflow for automated builds
- Build output configured for the root domain

## Technologies Used

- React 19
- Tailwind CSS
- shadcn/ui components
- Radix UI
- Lucide React icons
- React Hook Form
- React Router DOM
