// scripts/seed-dataconnect.js
const fs = require('fs');

(async () => {
  try {
    const query = fs.readFileSync('dataconnect/seed_data.gql', 'utf8');
    
    const response = await fetch('http://127.0.0.1:9399/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    
    const status = response.status;
    const result = await response.text();
    
    console.log(`Status: ${status}`);
    console.log('Response:', result);
    
    if (status === 200) {
      console.log('\n✅ Database seeded successfully!');
      console.log('\nNext: Connect pgAdmin to 127.0.0.1:5432');
      console.log('  - Database: fdcdb');
      console.log('  - Username: postgres');
      console.log('  - Password: (leave blank)');
    } else {
      console.error('\n❌ Seeding failed. Check the emulator logs.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    console.log('\nMake sure the Data Connect emulator is running:');
    console.log('  firebase emulators:start --only dataconnect');
  }
})();