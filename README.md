# FitLog — Workout Library

FitLog is a responsive workout library web application built with Next.js and TypeScript. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track completed exercises.

## Live Project

Live Website: Add your deployed link here

GitHub Repository: https://github.com/alnoman9631/fitlog

## Features

- Responsive workout library for mobile, tablet, and desktop
- Browse 12 workouts with duration, calories, rating, equipment, and difficulty
- Dynamic workout details page with complete exercise information
- Add workouts to Today's Plan
- Save workouts for later
- Remove workouts from the plan or saved list
- Mark planned workouts as completed
- Live plan counters for exercises, minutes, and calories
- Sort workouts by duration, calories, or rating
- Toast notifications for workout actions
- LocalStorage support to preserve plan and saved workouts after refresh
- Custom 404, loading, and error pages

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Hot Toast
- REST API
- LocalStorage
- Git
- GitHub

## API

FitLog uses the FitLog Workout API.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
Get Workout by ID
https://api.abcz.workers.dev/api/fitlog/:id
Main Pages
Home Page

The home page contains:

Responsive navigation bar
Hero section
Workout library
Workout sorting
Responsive workout cards
Footer
Workout Details Page

Each workout has a dedicated dynamic route:

/workout/[id]

The details page includes:

Workout image
Muscle groups
Difficulty
Description
Equipment
Duration
Calories
Sets
Reps
Rating
Step-by-step instructions
Add to Today's Plan
Save for Later
My Plan Page

The My Plan page includes:

Today's Plan
Saved workouts
Exercise count
Total workout minutes
Total calories
Mark as Done
Remove workout
View Details
Empty state when there are no workouts
Project Structure
fitlog/
│
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       ├── error.tsx
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── WorkoutActions.tsx
│   ├── WorkoutCard.tsx
│   └── WorkoutGrid.tsx
│
├── context/
│   └── FitLogContext.tsx
│
├── lib/
│   └── api.ts
│
├── types/
│   └── workout.ts
│
├── public/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
Getting Started
1. Clone the Repository
git clone https://github.com/alnoman9631/fitlog.git
2. Go to the Project Directory
cd fitlog
3. Install Dependencies
npm install
4. Run the Development Server
npm run dev

Open the application in your browser:

http://localhost:3000
Production Build

To create a production build:

npm run build

To start the production server:

npm start
Responsive Design

FitLog is designed to work across:

Mobile devices
Tablets
Laptops
Desktop screens

The workout library automatically adjusts its layout according to the screen size.

State Management

FitLog uses React Context to manage:

Today's workout plan
Saved workouts
Add and remove actions
Workout completion state

LocalStorage is used to preserve the workout plan and saved workouts after refreshing the browser.

User Experience

The application provides:

Loading animations
Toast notifications
Active navigation states
Responsive layouts
Interactive buttons
Workout sorting
Empty states
Error handling
Custom 404 page
Author

Noman


© 2026 FitLog — Workout Library. Train hard, log honest.
