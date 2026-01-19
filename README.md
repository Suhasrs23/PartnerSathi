# PartnerSathi

A full-stack emergency response platform built with React, Firebase, and Google Cloud Data Connect, designed to help users find assistance during roadside emergencies.

## 🚀 Project Overview

PartnerSathi is an emergency assistance application that connects users in need with nearby helpers. The platform includes user verification, emergency alert system, real-time location tracking, and rating system.

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **ESLint** - Code linting
- **TypeScript** - Type safety

### Backend & Database

- **Firebase Hosting** - Static file hosting
- **Firebase Functions** - Serverless backend (configured but not yet implemented)
- **Google Cloud Data Connect** - PostgreSQL database with GraphQL API
- **Firebase Emulators** - Local development environment

### Database Schema

- **PostgreSQL** - Primary database
- **GraphQL** - API layer via Data Connect
- **Vector fields** - Location data storage

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase CLI** (`npm install -g firebase-tools`)
- **Google Cloud CLI** (for Data Connect)

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd PartnerSathi
```

### 2. Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

### 3. Login to Firebase

```bash
firebase login
```

### 4. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### 5. Firebase Configuration

```bash
# From the root directory
firebase use <your-firebase-project-id>
```

### 6. Set up Google Cloud Data Connect

1. Enable the Data Connect API in Google Cloud Console
2. Configure the PostgreSQL instance:
   - Instance ID: `partnersathi-fdc`
   - Database: `fdcdb`
   - Location: `us-east4`

### 7. Generate Data Connect SDK

```bash
# From the root directory
firebase dataconnect:sdk:generate
```

## 🚀 Running the Project

### Development Mode

1. **Start Firebase Emulators** (from root directory):

```bash
firebase emulators:start
```

2. **Start Frontend Development Server** (in a new terminal):

```bash
cd Frontend
npm run dev
```

The application will be available at:

- Frontend: `http://localhost:3000`
- Firebase Hosting Emulator: `http://localhost:5000`
- Firebase Functions Emulator: `http://localhost:5001`
- Firebase Emulator UI: `http://localhost:4000`

### Production Build

1. **Build Frontend**:

```bash
cd Frontend
npm run build
```

2. **Deploy to Firebase**:

```bash
# From root directory
firebase deploy
```

## 🔧 Available Scripts

### Frontend Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run lint        # Run ESLint
npm run preview     # Preview production build
```

### Firebase Scripts

```bash
firebase emulators:start    # Start all emulators
firebase deploy            # Deploy to production
firebase serve             # Serve built project locally
```

## 🌐 Environment Configuration

### Firebase Emulators

- **Functions**: Port 5001
- **Hosting**: Port 5000
- **Data Connect**: Uses local PGLite data directory
- **UI**: Enabled for debugging

### Vite Dev Server

- **Port**: 3000
- **API Proxy**: `/api` routes proxied to `http://localhost:5001`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Notes

- The Firebase Functions directory is currently empty and ready for backend implementation
- Data Connect SDK is automatically generated to `Frontend/src/dataconnect-generated`
- The project uses React 19 with TypeScript for type safety
- Vector fields in the schema are used for storing geographical coordinates

## 🚨 Troubleshooting

### Common Issues

1. **Data Connect SDK Generation Fails**

   - Ensure you're logged into the correct Google Cloud project
   - Verify Data Connect API is enabled
   - Check that PostgreSQL instance is properly configured

2. **Emulators Won't Start**

   - Ensure all required ports are available
   - Check Firebase CLI is up to date
   - Verify firebase.json configuration

3. **Frontend Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript errors: `npm run lint`

For more help, refer to the [Firebase Documentation](https://firebase.google.com/docs) and [Google Cloud Data Connect Documentation](https://cloud.google.com/dataconnect/docs).
