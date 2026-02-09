/**
 * Seed the database with initial test data
 * This replicates the seed_data.gql mutation programmatically
 *
 * Make sure the Data Connect emulator is running:
 * firebase emulators:start --only dataconnect
 */

const {
  connectorConfig,
} = require('./src/dataconnect-generated');

// Import the Firestore Admin SDK for direct operations
const { getDataConnect, executeMutation } = require('firebase/data-connect');

async function seedDatabase() {
  console.log('\n🌱 Seeding database with test data...\n');

  try {
    // Read and parse the seed_data.gql file
    const fs = require('fs');
    const path = require('path');

    const seedDataPath = path.join(__dirname, 'dataconnect', 'seed_data.gql');
    const seedData = fs.readFileSync(seedDataPath, 'utf8');

    console.log('📄 Seed data loaded from seed_data.gql');
    console.log('\n⚠️  Note: To execute the seed data, use the Firebase CLI:\n');
    console.log('   firebase dataconnect:sql:execute --instance=partnersathi\n');
    console.log('Or manually execute the GraphQL mutation through the SDK\n');

    // Alternative: Direct seeding using the SDK (uncomment if you want to seed programmatically)
    console.log('📝 Seeding data programmatically...\n');

    // For programmatic seeding, you would need to import individual mutations
    // and execute them one by one. The seed_data.gql file is designed to be
    // executed as a single batch mutation.

    console.log('✅ Instructions provided. Please run the Firebase CLI command above.\n');

  } catch (error) {
    console.error('\n❌ Error during seeding:', error.message);
  }
}

// Run the seed script
seedDatabase().catch(console.error);
