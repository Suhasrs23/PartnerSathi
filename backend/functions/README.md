# PartnerSathi Backend Functions

Firebase Cloud Functions for the PartnerSathi emergency response platform.

## Structure

```
backend/functions/
├── src/
│   ├── index.js              # Function exports (HTTP endpoints)
│   ├── controllers/
│   │   └── sos.js            # SOS alert handler
│   ├── services/
│   │   ├── dataconnect.js    # Data Connect GraphQL client
│   │   └── notifications.js  # FCM push notification service
│   ├── middleware/
│   │   └── auth.js           # Firebase auth verification
│   └── test-dataconnect.js   # Test script for Data Connect
├── package.json
└── .env.local                # Local environment variables
```

## Setup

### 1. Install Dependencies

```bash
cd backend/functions
npm install
```

### 2. Configure Environment

The `.env.local` file is already configured for local development:

```
DATACONNECT_URL=http://127.0.0.1:9399/graphql
```

### 3. Start Emulators

From the project root:

```bash
firebase emulators:start
```

## Testing Data Connect

Run the test script to verify Data Connect connectivity:

```bash
cd backend/functions
npm test
```

This will:

- Connect to the local Data Connect emulator
- Fetch existing events
- Fetch active users
- Insert a test event

## API Endpoints

### POST /sos

Trigger an SOS emergency alert.

**Request:**

```bash
curl -X POST http://127.0.0.1:5001/partnersathi-2026/us-central1/sos \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "Robbery",
    "latitude": 28.6139,
    "longitude": 77.2090,
    "severityLevel": "high"
  }'
```

**Response:**

```json
{
  "success": true,
  "message": "SOS alert sent successfully",
  "data": {
    "eventType": "Robbery",
    "notificationsSent": 5
  }
}
```

### POST /respond

Acknowledge response to an SOS alert.

**Request:**

```bash
curl -X POST http://127.0.0.1:5001/partnersathi-2026/us-central1/respond \
  -H "Content-Type: application/json" \
  -d '{
    "eventId": "550e8400-e29b-41d4-a716-446655440002",
    "responseStatus": "accepted"
  }'
```

### GET /health

Health check endpoint.

```bash
curl http://127.0.0.1:5001/partnersathi-2026/us-central1/health
```

## Development Workflow

1. **Start emulators** (from project root):

   ```bash
   firebase emulators:start
   ```

2. **Test Data Connect** (from backend/functions):

   ```bash
   npm test
   ```

3. **Make changes** to functions in `src/`

4. **Functions auto-reload** when you save files (no restart needed)

5. **Test endpoints** using curl or Postman

## Data Connect Operations

The `dataconnect.js` service provides these methods:

- `insertEvent(eventData)` - Insert new SOS event
- `getNearbyUsers(limit)` - Get active users (for notifications)
- `getAllEvents()` - Fetch all events
- `insertEventResponder(responderData)` - Record responder acknowledgment
- `graphql(query, variables)` - Execute any GraphQL query

## Firebase Authentication

For production, endpoints require Firebase ID tokens:

```bash
curl -X POST http://127.0.0.1:5001/.../sos \
  -H "Authorization: Bearer <firebase-id-token>" \
  -H "Content-Type: application/json" \
  -d '{ "eventType": "Robbery", ... }'
```

For local development, auth is optional (falls back to test user ID).

## Deployment

Deploy to production:

```bash
firebase deploy --only functions
```

Deploy specific function:

```bash
firebase deploy --only functions:sos
```

## Logging

View logs in emulator UI: `http://127.0.0.1:4000/functions`

Or use Firebase CLI:

```bash
firebase functions:log
```

## Troubleshooting

**Functions not loading:**

- Check `firebase.json` points to `backend/functions`
- Run `npm install` in `backend/functions`
- Restart emulators

**Data Connect connection fails:**

- Verify emulators are running: `firebase emulators:start`
- Check Data Connect is on port 9399
- Run test script: `npm test`

**Push notifications not working:**

- Verify Firebase Admin is initialized
- Check FCM tokens are valid
- View logs in emulator UI
