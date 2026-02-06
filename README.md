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
- **Java JDK 21+** (required for Firebase Data Connect emulator)
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

## � Local Development Setup

### Install Java 21+ (Required for Data Connect Emulator)

**Windows (using Chocolatey):**

```powershell
# Install Chocolatey if not already installed (run PowerShell as Admin)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Java 21
choco install temurin21 -y
```

**Windows (Manual Install):**

1. Download JDK 21 from [Adoptium](https://adoptium.net/temurin/releases/?version=21)
2. Run the installer and ensure "Set JAVA_HOME" and "Add to PATH" are checked
3. Restart your terminal/VS Code

**Verify Java Installation:**

```powershell
java -version
# Should show: openjdk version "21.x.x"
```

**If java command not found after install:**

```powershell
# For current session only (PowerShell)
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.9.10-hotspot"
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
java -version

# Or close VS Code completely and reopen it
```

**Set Java permanently (PowerShell as Admin):**

```powershell
setx -m JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-21.0.9.10-hotspot"
$currentPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
[Environment]::SetEnvironmentVariable("Path", "$currentPath;%JAVA_HOME%\bin", "Machine")
```

### Running Emulators Locally

**Start All Emulators (with UI):**

```powershell
cd C:\Users\suhsr\PartnerSathi
firebase emulators:start
```

**Start Specific Emulators:**

```powershell
# Only Data Connect and Functions
firebase emulators:start --only dataconnect,functions

# Only Data Connect
firebase emulators:start --only dataconnect
```

**Access Emulator UI:**
Open browser to `http://127.0.0.1:4000`

**Emulator Endpoints:**

- **Emulator UI**: `http://127.0.0.1:4000`
- **Data Connect GraphQL**: `http://127.0.0.1:9399/graphql`
- **Functions**: `http://127.0.0.1:5001`
- **Hosting**: `http://127.0.0.1:5000`

### Seed Local Database

While emulators are running, in a new terminal:

```powershell
node scripts/scripts/seed-dataconnect.js
```

### Test Data Connect GraphQL (via Emulator UI)

1. Open `http://127.0.0.1:4000`
2. Click **Data Connect** tab
3. Run queries:

```graphql
query GetAllEvents {
  events {
    euid
    userId
    eventType
    latitude
    longitude
    createdAt
  }
}
```

4. Run mutations:

```graphql
mutation CreateTestEvent {
  events_insert(
    data: {
      userId: "550e8400-e29b-41d4-a716-446655440000"
      eventType: "Robbery"
      latitude: 28.6139
      longitude: 77.2090
      triggeredBy: "manual"
    }
  )
}
```

### Configure Functions to Use Local Emulator

Set environment variable before starting emulators:

```powershell
$env:DATACONNECT_URL = "http://127.0.0.1:9399/graphql"
firebase emulators:start
```

## �🚀 Running the Project

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

1. **Error: "Could not spawn `java -version`" when starting emulators**

   **Problem:** Java is not installed or not on PATH

   **Solution:**

   ```powershell
   # Install Java 21
   choco install temurin21 -y

   # Close and reopen VS Code/terminal, then verify:
   java -version

   # If still not found, set manually for current session:
   $env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.9.10-hotspot"
   $env:Path = "$env:JAVA_HOME\bin;$env:Path"
   java -version
   ```

2. **Error: "firebase-tools no longer supports Java version before 21"**

   **Problem:** Installed Java version is too old (17 or below)

   **Solution:**

   ```powershell
   # Install Java 21
   choco install temurin21 -y

   # Verify correct version is active:
   java -version  # Should show "21.x.x"

   # If showing old version, check installed versions:
   Get-ChildItem "C:\Program Files\Eclipse Adoptium"

   # Set correct JAVA_HOME:
   $env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.9.10-hotspot"
   $env:Path = "$env:JAVA_HOME\bin;$env:Path"
   ```

3. **Java installed but `java -version` still fails in VS Code**

   **Problem:** VS Code terminal hasn't picked up new PATH

   **Solution:**
   - Close VS Code completely
   - Reopen VS Code
   - Open new terminal and try `java -version`

   OR set manually:

   ```powershell
   $env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21.0.9.10-hotspot"
   $env:Path = "$env:JAVA_HOME\bin;$env:Path"
   ```

4. **Error: "No emulators to start, run firebase init emulators"**

   **Problem:** Emulator configuration missing

   **Solution:**

   ```powershell
   firebase init emulators
   # Select: Functions, Hosting, Data Connect
   # Accept default ports or customize
   ```

5. **Data Connect SDK Generation Fails**
   - Ensure you're logged into the correct Google Cloud project
   - Verify Data Connect API is enabled
   - Check that PostgreSQL instance is properly configured

6. **Emulators Won't Start (Ports Already in Use)**
   - Ensure all required ports are available (4000, 5000, 5001, 9399)
   - Check Firebase CLI is up to date: `npm install -g firebase-tools@latest`
   - Verify firebase.json configuration
   - Kill processes using ports:

   ```powershell
   # Find process using port 9399
   netstat -ano | findstr :9399
   # Kill process by PID
   taskkill /PID <PID> /F
   ```

7. **Frontend Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript errors: `npm run lint`

### Quick Reset (Nuclear Option)

If emulators are completely broken:

```powershell
# Stop all Firebase processes
taskkill /F /IM java.exe
taskkill /F /IM node.exe

# Clear emulator cache
Remove-Item -Recurse -Force "$env:USERPROFILE\.cache\firebase"
Remove-Item -Recurse -Force "dataconnect\.dataconnect\pgliteData"

# Reinitialize
firebase init emulators
firebase emulators:start
```

For more help, refer to the [Firebase Documentation](https://firebase.google.com/docs) and [Google Cloud Data Connect Documentation](https://cloud.google.com/dataconnect/docs).
