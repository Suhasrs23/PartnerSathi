/**
 * Test PostgreSQL connection to Firebase Data Connect emulator
 * This will help us figure out the correct credentials
 */

const net = require('net');

console.log('🔍 Testing PostgreSQL connection...\n');

// Test if port 5433 is accessible
const socket = new net.Socket();
const timeout = 3000;

socket.setTimeout(timeout);

socket.on('connect', () => {
    console.log('✅ Port 5433 is open and accepting connections');
    console.log('\n📋 Connection Details to use in pgAdmin:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Host:     127.0.0.1');
    console.log('Port:     5433');
    console.log('Database: fdcdb');
    console.log('Username: postgres');
    console.log('Password: (leave empty or try "postgres")');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('📝 Steps in pgAdmin:');
    console.log('1. Right-click "Servers" → "Register" → "Server"');
    console.log('2. General tab: Name = "Firebase Data Connect"');
    console.log('3. Connection tab: Enter details above');
    console.log('4. Make sure Port is 5433 (NOT 5432!)');
    console.log('5. Click Save\n');

    socket.destroy();
});

socket.on('timeout', () => {
    console.error('❌ Connection timeout - is the emulator running?');
    console.log('\nStart the emulator with:');
    console.log('  firebase emulators:start --only dataconnect\n');
    socket.destroy();
});

socket.on('error', (err) => {
    console.error('❌ Connection error:', err.message);
    console.log('\nMake sure:');
    console.log('1. Firebase Data Connect emulator is running');
    console.log('2. PostgreSQL is listening on port 5433');
    console.log('\nStart the emulator with:');
    console.log('  firebase emulators:start --only dataconnect\n');
});

// Attempt connection
socket.connect(5433, '127.0.0.1');
