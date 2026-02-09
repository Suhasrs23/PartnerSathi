# Development Guide - Firebase Data Connect

## 🎯 Quick Answer: Connection Details

### During Development

**You DON'T use connection strings!** Just import and use the SDK functions:

```javascript
const { insertEvent, insertUser, getNearbyUsers } = require('./services/dataconnect');

// That's it! No URLs, no connection strings needed.
```

### Connection Info (for reference)

**Development (Emulator):**
- **Data Connect SDK**: Automatically connects to `localhost:9399`
- **PostgreSQL (pgAdmin)**: `localhost:5433` / database: `fdcdb`

**Production:**
- **Data Connect SDK**: Automatically connects to Firebase cloud
- **No direct database access** (use Firebase Console)

---

## 📦 How to Save Data in Your Backend

### Example 1: Create a User (in your route handler)

```javascript
// In: backend/functions/src/controllers/UserController.js
const { insertUser, sdk } = require('../services/dataconnect');

async function createUser(req, res) {
  try {
    const userData = req.body;

    // Save to database
    const user = await insertUser({
      name: userData.name,
      phoneNumber: userData.phoneNumber,
      isPhoneVerified: false,
      email: userData.email,
      vehicleType: userData.vehicleType,
      pushToken: userData.pushToken
    });

    // Returns: { id: 'uuid-here' }
    res.status(201).json({
      success: true,
      userId: user.id,
      message: 'User created successfully'
    });

  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = { createUser };
```

### Example 2: Create an Emergency Event

```javascript
// In: backend/functions/src/controllers/EventController.js
const { insertEvent, insertEventResponder } = require('../services/dataconnect');

async function createEmergencyEvent(req, res) {
  try {
    const { userId, eventType, latitude, longitude } = req.body;

    // Save emergency event to database
    const event = await insertEvent({
      userId,
      eventType,
      latitude,
      longitude,
      triggeredBy: 'manual',
      severityLevel: 'high'
    });

    // event.id contains the UUID of the created event

    // TODO: Send push notifications to nearby users
    // const nearbyUsers = await getNearbyUsers();

    res.status(201).json({
      success: true,
      eventId: event.id,
      message: 'Emergency event created'
    });

  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = { createEmergencyEvent };
```

### Example 3: Log User Location

```javascript
const { insertLocationLog } = require('../services/dataconnect');

async function updateLocation(req, res) {
  try {
    const { userId, latitude, longitude } = req.body;

    // Save location to database
    await insertLocationLog({
      userId,
      latitude,
      longitude
    });

    res.json({
      success: true,
      message: 'Location updated'
    });

  } catch (error) {
    console.error('Location log error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
```

---

## 🔧 Environment Configuration

Create a `.env` file in `backend/functions/`:

```bash
# Development
NODE_ENV=development
USE_EMULATOR=true

# Firebase Config (for production)
FIREBASE_PROJECT_ID=partnersathi
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=partnersathi.firebaseapp.com
```

The service automatically connects to:
- **Emulator** when `NODE_ENV=development` or `USE_EMULATOR=true`
- **Production** otherwise

---

## 📱 For React Native App

```javascript
// In your app initialization (e.g., App.js or services/firebase.js)
import { initializeApp } from 'firebase/app';
import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect';

const firebaseConfig = {
  projectId: 'partnersathi',
  apiKey: 'your-api-key',
  // ... other config
};

const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app, {
  connector: 'example',
  service: 'partnersathi',
  location: 'us-east4'
});

// Connect to emulator in development
if (__DEV__) {
  // For Android emulator, use 10.0.2.2
  connectDataConnectEmulator(dataConnect, '10.0.2.2', 9399);

  // For iOS simulator or physical device, use your computer's local IP
  // connectDataConnectEmulator(dataConnect, '192.168.1.100', 9399);
}

export { dataConnect };
```

Then in your components:

```javascript
import { createEvent, getAllUsers } from '@/dataconnect-generated';

async function triggerEmergency() {
  try {
    const result = await createEvent({
      userId: currentUser.id,
      eventType: 'Robbery',
      latitude: location.latitude,
      longitude: location.longitude,
      triggeredBy: 'manual',
      severityLevel: 'high',
      locationAccuracy: location.accuracy
    });

    console.log('Emergency created:', result.data.events_insert.id);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## 🎯 Key Points

1. ✅ **No connection strings needed** - SDK handles everything
2. ✅ **Automatic emulator connection** in development
3. ✅ **Type-safe operations** - SDK validates your data
4. ✅ **Same code for dev and production** - just change env vars
5. ✅ **All operations are async** - use `await` or `.then()`

---

## 🔍 Available Operations

Check your `dataconnect.js` service for all available functions:

### Users
- `insertUser(userData)` - Create user
- `sdk.getAllUsers()` - Get all users
- `sdk.getUserById(id)` - Get specific user
- `sdk.updateUser(uuid, data)` - Update user
- `updateUserLastLogin(userId, timestamp)` - Update last login

### Events
- `insertEvent(eventData)` - Create emergency event
- `getAllEvents()` - Get all events
- `sdk.getEventById(id)` - Get specific event
- `sdk.updateEventStatus(euid, status)` - Update status
- `sdk.markEventAsFalseAlarm(euid)` - Mark as false alarm

### Emergency Contacts
- `sdk.addEmergencyContact(data)` - Add contact
- `sdk.getAllEmergencyContacts()` - Get all contacts
- `sdk.updateEmergencyContact(ecid, data)` - Update contact
- `sdk.deleteEmergencyContact(ecid)` - Delete contact

### Location
- `insertLocationLog(locationData)` - Log location
- `sdk.getAllLocationLogs()` - Get location history

### Responders
- `insertEventResponder(data)` - Add responder to event
- `sdk.updateResponderStatus(erid, status)` - Update responder

---

## 🚀 Quick Start Checklist

1. ✅ Data Connect emulator running: `firebase emulators:start --only dataconnect`
2. ✅ Import from `services/dataconnect.js`
3. ✅ Call the function with your data
4. ✅ Done! Data is saved to database

**That's it!** No URLs, no connection strings, no PostgreSQL drivers needed. The SDK handles everything! 🎉
