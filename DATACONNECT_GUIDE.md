# Firebase Data Connect Guide

This guide explains how to use Firebase Data Connect with the PartnerSathi project.

## 🎯 Overview

Firebase Data Connect provides a GraphQL interface to your PostgreSQL database with:
- Type-safe generated SDKs for React and Node.js
- Real-time data synchronization
- Automatic query optimization
- Built-in authentication integration

## 🚀 Getting Started

### 1. Start the Data Connect Emulator

```bash
firebase emulators:start --only dataconnect
```

The emulator will start on:
- **Data Connect**: http://127.0.0.1:9399
- **Postgres**: 127.0.0.1:5433

**Important**: Data Connect doesn't have a web UI at `/graphql`. You interact with it through:
1. The generated SDK
2. Firebase CLI commands
3. Your application code

### 2. Understanding the Structure

```
dataconnect/
├── dataconnect.yaml          # Main configuration
├── schema/
│   └── schema.gql            # Database schema definition
├── example/
│   ├── connector.yaml        # SDK generation config
│   └── queries.gql           # Custom queries and mutations
└── seed_data.gql             # Sample data for testing
```

### 3. Available Operations

#### User Operations
- `CreateUser` - Create a new user
- `GetAllUsers` - Get all users
- `GetUserById` - Get user by UUID
- `UpdateUser` - Update user profile
- `UpdateLastLogin` - Update last login timestamp
- `DeactivateUser` - Soft delete a user
- `DeleteUser` - Permanently delete a user

#### Company Operations
- `CreateCompany` - Create a new company
- `GetAllCompanies` - Get all companies
- `GetCompanyById` - Get company by UUID

#### User-Company Relationships
- `LinkUserToCompany` - Link a user to a company
- `GetAllUserCompanies` - Get all user-company relationships
- `UserLeftCompany` - Mark user as left company

#### Emergency Contact Operations
- `AddEmergencyContact` - Add emergency contact
- `GetAllEmergencyContacts` - Get all emergency contacts
- `UpdateEmergencyContact` - Update emergency contact
- `DeleteEmergencyContact` - Delete emergency contact

#### Event Operations
- `CreateEvent` - Create emergency event
- `GetAllEvents` - Get all events
- `GetEventById` - Get event by UUID
- `UpdateEventStatus` - Update event status
- `MarkEventAsFalseAlarm` - Mark event as false alarm
- `IncrementResponseCount` - Update response count
- `DeleteEvent` - Delete event

#### Event Responder Operations
- `AddEventResponder` - Add responder to event
- `GetAllEventResponders` - Get all responders
- `UpdateResponderStatus` - Update responder status
- `ResponderLeftEvent` - Mark responder as left
- `DeleteEventResponder` - Remove responder

#### Location Log Operations
- `LogLocation` - Log user location
- `GetAllLocationLogs` - Get all location logs
- `DeleteLocationLog` - Delete location log

## 📝 Usage Examples

### Node.js/Backend

```javascript
const {
  CreateUser,
  GetAllUsers,
  CreateEvent
} = require('./src/dataconnect-generated');

// Create a user
const user = await CreateUser({
  name: 'John Doe',
  phoneNumber: '+919876543210',
  isPhoneVerified: true,
  email: 'john@example.com',
  vehicleType: 'Two Wheeler'
});

// Get all users
const users = await GetAllUsers();
console.log(users.data.users);

// Create an emergency event
const event = await CreateEvent({
  userId: user.data.user_insert.uuid,
  eventType: 'Accident',
  severityLevel: 'high',
  latitude: 28.6139,
  longitude: 77.2090,
  triggeredBy: 'manual'
});
```

### React/Frontend

```javascript
import {
  useCreateUserMutation,
  useGetAllUsersQuery,
  useCreateEventMutation
} from '@/dataconnect-generated/react';

function UserManager() {
  // Query hook
  const { data, loading, error } = useGetAllUsersQuery();

  // Mutation hook
  const createUser = useCreateUserMutation();

  const handleCreateUser = async () => {
    await createUser.execute({
      name: 'Jane Doe',
      phoneNumber: '+919876543211',
      isPhoneVerified: true,
      email: 'jane@example.com'
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
      <ul>
        {data.users.map(user => (
          <li key={user.uuid}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 🧪 Testing

### Run the Test Script

```bash
node test-dataconnect.js
```

This will:
1. Create test users
2. Create test companies
3. Create emergency events
4. Add emergency contacts
5. Log locations
6. Fetch and display all data

### Seed the Database

To populate the database with the predefined test data:

```bash
# Option 1: Through Firebase CLI (executes the entire seed_data.gql mutation)
firebase dataconnect:sql:execute

# Option 2: Run the seed script
node seed-database.js
```

## 🔧 Regenerating the SDK

After modifying `schema.gql` or `queries.gql`:

```bash
firebase dataconnect:sdk:generate
```

This generates TypeScript/JavaScript SDKs in:
- `web-app/src/dataconnect-generated/` (React SDK)
- `src/dataconnect-generated/` (Core SDK)

## 📊 Database Schema

The schema includes:
- **User** - User accounts with profile information
- **Companies** - Delivery companies (Zomato, Swiggy, etc.)
- **UserCompanies** - User-company relationships
- **EmergencyContacts** - User emergency contacts
- **Events** - Emergency events (robbery, accident, etc.)
- **EventResponders** - Users who responded to events
- **LocationLogs** - User location history

## 🔐 Authentication

Currently set to `@auth(level: NO_ACCESS)` for development/testing.

For production, update to use proper authentication:
```graphql
query GetAllUsers @auth(level: USER) {
  users {
    uuid
    name
  }
}
```

## 🐛 Troubleshooting

### Error: "Not Found" at http://127.0.0.1:9399/graphql

This is expected! Data Connect doesn't expose a traditional GraphQL playground. Use:
- The generated SDK
- Your test scripts
- Firebase CLI commands

### Error: "Unable to start on port 5432"

PostgreSQL is already running on port 5432. Data Connect automatically uses port 5433 instead (this is normal).

### Error during SDK generation

1. Check syntax in `queries.gql`
2. Ensure schema is valid in `schema.gql`
3. Run `firebase dataconnect:sdk:generate` to see detailed errors

### Emulator data not persisting

Emulator data is temporary. For persistent test data:
1. Use the seed script after each restart
2. Or deploy to a Firebase project with Cloud SQL

## 📚 Additional Resources

- [Firebase Data Connect Documentation](https://firebase.google.com/docs/data-connect)
- [GraphQL Basics](https://graphql.org/learn/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🎉 Next Steps

1. ✅ Start the emulator
2. ✅ Run the test script
3. ✅ Integrate with your React Native app
4. ✅ Connect your backend functions
5. 🚀 Deploy to production!
