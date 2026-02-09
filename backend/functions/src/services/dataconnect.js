/**
 * Firebase Data Connect Service
 * Uses the generated SDK for type-safe database operations
 */

const { initializeApp } = require('firebase/app');
const { getDataConnect, connectDataConnectEmulator } = require('firebase/data-connect');

// Import all generated operations from the SDK
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  updateLastLogin,
  deactivateUser,

  createEvent,
  getAllEvents,
  getEventById,
  updateEventStatus,
  markEventAsFalseAlarm,

  addEventResponder,
  getAllEventResponders,
  updateResponderStatus,

  addEmergencyContact,
  getAllEmergencyContacts,
  updateEmergencyContact,
  deleteEmergencyContact,

  logLocation,
  getAllLocationLogs,

  createCompany,
  linkUserToCompany,
  userLeftCompany
} = require('../../../../src/dataconnect-generated');

// Firebase configuration
const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID || 'partnersathi',
  apiKey: process.env.FIREBASE_API_KEY || 'demo-key',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'partnersathi.firebaseapp.com',
};

// Initialize Firebase (singleton)
let app;
let isEmulatorConnected = false;

function getFirebaseApp() {
  if (!app) {
    app = initializeApp(firebaseConfig);

    // Connect to emulator in development
    if (process.env.NODE_ENV === 'development' || process.env.USE_EMULATOR === 'true') {
      const connectorConfig = {
        connector: 'example',
        service: 'partnersathi',
        location: 'us-east4'
      };

      const dataConnect = getDataConnect(app, connectorConfig);

      if (!isEmulatorConnected) {
        console.log('🔧 Connecting to Data Connect Emulator at localhost:9399');
        connectDataConnectEmulator(dataConnect, 'localhost', 9399);
        isEmulatorConnected = true;
      }
    }
  }
  return app;
}

// Initialize on module load
getFirebaseApp();

/**
 * Insert a new event (SOS alert)
 * @param {object} eventData - Event data
 * @returns {Promise<object>} Created event with ID
 */
async function insertEvent(eventData) {
  try {
    const result = await createEvent({
      userId: eventData.userId,
      eventType: eventData.eventType,
      latitude: eventData.latitude || null,
      longitude: eventData.longitude || null,
      triggeredBy: eventData.triggeredBy,
      severityLevel: eventData.severityLevel || 'medium',
      locationAccuracy: eventData.locationAccuracy || null
    });

    return result.data.events_insert;
  } catch (error) {
    console.error('Failed to insert event:', error);
    throw error;
  }
}

/**
 * Get nearby users based on location
 * Note: Returns all active users - filter by distance in your controller
 * @returns {Promise<Array>}
 */
async function getNearbyUsers() {
  try {
    const result = await getAllUsers();

    // Filter only active users
    const activeUsers = result.data.users.filter(user => user.isActive);

    return activeUsers;
  } catch (error) {
    console.error('Failed to get nearby users:', error);
    throw error;
  }
}

/**
 * Get all events
 * @returns {Promise<Array>}
 */
async function getEvents() {
  try {
    const result = await getAllEvents();
    return result.data.events || [];
  } catch (error) {
    console.error('Failed to get events:', error);
    // Return empty array on error for now
    // In production, you might want to handle this differently
    return [];
  }
}

/**
 * Insert event responder record
 * @param {object} responderData - Responder data
 * @returns {Promise<object>}
 */
async function insertEventResponder(responderData) {
  try {
    const result = await addEventResponder({
      eventId: responderData.eventId,
      responderUserId: responderData.responderUserId,
      responseStatus: responderData.responseStatus || 'accepted'
    });

    return result.data.eventResponders_insert;
  } catch (error) {
    console.error('Failed to insert event responder:', error);
    throw error;
  }
}

/**
 * Create a new user
 * @param {object} userData - User data
 * @returns {Promise<object>}
 */
async function insertUser(userData) {
  try {
    const result = await createUser({
      name: userData.name,
      phoneNumber: userData.phoneNumber,
      isPhoneVerified: userData.isPhoneVerified || false,
      email: userData.email || null,
      vehicleType: userData.vehicleType || null,
      pushToken: userData.pushToken || null
    });

    return result.data.user_insert;
  } catch (error) {
    console.error('Failed to insert user:', error);
    throw error;
  }
}

/**
 * Update user's last login timestamp
 * @param {string} userId - User UUID
 * @param {string} timestamp - ISO timestamp
 * @returns {Promise<void>}
 */
async function updateUserLastLogin(userId, timestamp) {
  try {
    await updateLastLogin({
      uuid: userId,
      lastLogin: timestamp
    });
  } catch (error) {
    console.error('Failed to update last login:', error);
    throw error;
  }
}

/**
 * Log user location
 * @param {object} locationData - Location data
 * @returns {Promise<object>}
 */
async function insertLocationLog(locationData) {
  try {
    const result = await logLocation({
      userId: locationData.userId,
      latitude: locationData.latitude,
      longitude: locationData.longitude
    });

    return result.data.locationLogs_insert;
  } catch (error) {
    console.error('Failed to log location:', error);
    throw error;
  }
}

// Export all functions
module.exports = {
  // Legacy functions (for backward compatibility)
  insertEvent,
  getNearbyUsers,
  getAllEvents: getEvents,
  insertEventResponder,

  // New functions using SDK
  insertUser,
  updateUserLastLogin,
  insertLocationLog,

  // Export SDK functions directly for advanced usage
  sdk: {
    // User operations
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    updateLastLogin,
    deactivateUser,

    // Event operations
    createEvent,
    getAllEvents,
    getEventById,
    updateEventStatus,
    markEventAsFalseAlarm,

    // Responder operations
    addEventResponder,
    getAllEventResponders,
    updateResponderStatus,

    // Emergency contact operations
    addEmergencyContact,
    getAllEmergencyContacts,
    updateEmergencyContact,
    deleteEmergencyContact,

    // Location operations
    logLocation,
    getAllLocationLogs,

    // Company operations
    createCompany,
    linkUserToCompany,
    userLeftCompany
  }
};
