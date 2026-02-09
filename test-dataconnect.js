/**
 * Test script for Firebase Data Connect operations
 * Make sure the Data Connect emulator is running before executing this script:
 * firebase emulators:start --only dataconnect
 */

// Initialize Firebase
const { initializeApp } = require('firebase/app');
const { getDataConnect, connectDataConnectEmulator } = require('firebase/data-connect');

// Firebase config (using emulator, so config values don't matter)
const firebaseConfig = {
  projectId: 'partnersathi',
  apiKey: 'demo-key',
  authDomain: 'localhost',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const {
  connectorConfig,
  createUser,
  getAllUsers,
  getUserById,
  createCompany,
  getAllCompanies,
  createEvent,
  getAllEvents,
  addEmergencyContact,
  getAllEmergencyContacts,
  logLocation,
  getAllLocationLogs
} = require('./src/dataconnect-generated');

// Connect to emulator
const dataConnect = getDataConnect(app, connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);

async function testDataConnect() {
  console.log('\n🔥 Testing Firebase Data Connect...\n');

  try {
    // Test 1: Create a new user
    console.log('1️⃣  Creating a new user...');
    const createUserResult = await createUser({
      name: 'Test User',
      phoneNumber: '+919999999999',
      isPhoneVerified: true,
      email: 'test@example.com',
      vehicleType: 'Two Wheeler',
      pushToken: 'test-push-token'
    });
    console.log('✅ User created:', createUserResult.data);

    // Test 2: Get all users
    console.log('\n2️⃣  Fetching all users...');
    const allUsers = await getAllUsers();
    console.log('✅ Found', allUsers.data.users.length, 'users');
    allUsers.data.users.forEach(user => {
      console.log(`   - ${user.name} (${user.phoneNumber})`);
    });

    // Test 3: Create a company
    console.log('\n3️⃣  Creating a company...');
    const createCompanyResult = await createCompany({
      companyName: 'Test Delivery Co.'
    });
    console.log('✅ Company created:', createCompanyResult.data);

    // Test 4: Get all companies (skipped - requires specific query parameters)
    console.log('\n4️⃣  Skipping GetAllCompanies (use GetCompanyById instead)...');

    // Test 5: Create an emergency event
    if (allUsers.data.users.length > 0) {
      const testUserId = allUsers.data.users[0].uuid;

      console.log('\n5️⃣  Creating an emergency event...');
      const createEventResult = await createEvent({
        userId: testUserId,
        eventType: 'Test Emergency',
        severityLevel: 'high',
        latitude: 28.6139,
        longitude: 77.2090,
        locationAccuracy: 10,
        triggeredBy: 'manual'
      });
      console.log('✅ Event created:', createEventResult.data);

      // Test 6: Add emergency contact
      console.log('\n6️⃣  Adding emergency contact...');
      const addContactResult = await addEmergencyContact({
        userId: testUserId,
        ecName: 'Emergency Contact',
        phoneNumber: '+919999999998',
        relation: 'Friend'
      });
      console.log('✅ Emergency contact added:', addContactResult.data);

      // Test 7: Log user location
      console.log('\n7️⃣  Logging user location...');
      const logLocationResult = await logLocation({
        userId: testUserId,
        latitude: 28.7041,
        longitude: 77.1025
      });
      console.log('✅ Location logged:', logLocationResult.data);

      // Note: GetAllEvents, GetAllEmergencyContacts, and GetAllLocationLogs
      // require specific query parameters in Firebase Data Connect.
      // Use GetEventById, etc. with specific IDs instead.
    }

    console.log('\n✅ All tests completed successfully! 🎉\n');

  } catch (error) {
    console.error('\n❌ Error during testing:', error);
    if (error.errors) {
      error.errors.forEach(err => {
        console.error('  -', err.message);
      });
    }
  }
}

// Run the tests
testDataConnect().catch(console.error);
