/**
 * Test script to verify Data Connect connectivity
 * Run: node src/test-dataconnect.js
 * (Make sure emulators are running first)
 */

const { getAllEvents, insertEvent, getNearbyUsers } = require('./services/dataconnect');

async function testDataConnect() {
  console.log('\n🧪 Testing Data Connect Connection...\n');
  console.log('Data Connect URL:', process.env.DATACONNECT_URL || 'http://127.0.0.1:9399/graphql');
  console.log('');

  try {
    // Test 1: Get all events
    console.log('📋 Test 1: Fetching all events...');
    const events = await getAllEvents();
    console.log(`✅ Found ${events.length} events`);
    if (events.length > 0) {
      console.log('Sample event:', JSON.stringify(events[0], null, 2));
    }
    console.log('');

    // Test 2: Get nearby users
    console.log('👥 Test 2: Fetching active users...');
    const users = await getNearbyUsers(10);
    console.log(`✅ Found ${users.length} users`);
    if (users.length > 0) {
      console.log('Sample user:', JSON.stringify(users[0], null, 2));
    }
    console.log('');

    // Test 3: Insert a test event
    console.log('➕ Test 3: Inserting test event...');
    await insertEvent({
      userId: '550e8400-e29b-41d4-a716-446655440000',
      eventType: 'Test',
      latitude: 28.6139,
      longitude: 77.2090,
      triggeredBy: 'test-script',
      severityLevel: 'low',
      status: 'test',
    });
    console.log('✅ Test event inserted successfully');
    console.log('');

    console.log('🎉 All tests passed! Data Connect is working.\n');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('\nMake sure:');
    console.error('1. Firebase emulators are running: firebase emulators:start');
    console.error('2. Data Connect emulator is on port 9399');
    console.error('3. Schema is loaded from dataconnect/schema/schema.gql\n');
    process.exit(1);
  }
}

// Run tests
testDataConnect();
