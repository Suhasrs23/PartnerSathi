/**
 * Data Connect GraphQL Client
 * Connects to Firebase Data Connect (local emulator or production)
 */

const fetch = require('node-fetch');

// Get Data Connect URL from environment (defaults to local emulator)
const DATACONNECT_URL = process.env.DATACONNECT_URL || 'http://127.0.0.1:9399/graphql';

/**
 * Execute a GraphQL query or mutation
 * @param {string} query - GraphQL query/mutation string
 * @param {object} variables - Variables for the query
 * @returns {Promise<object>} - Query result data
 */
async function graphql(query, variables = {}) {
  try {
    const response = await fetch(DATACONNECT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    if (json.errors) {
      console.error('GraphQL Errors:', JSON.stringify(json.errors, null, 2));
      throw new Error(`GraphQL Error: ${JSON.stringify(json.errors)}`);
    }

    return json.data;
  } catch (error) {
    console.error('Data Connect request failed:', error.message);
    throw error;
  }
}

/**
 * Insert a new event (SOS alert)
 * @param {object} eventData - Event data
 * @returns {Promise<void>}
 */
async function insertEvent(eventData) {
  const mutation = `
    mutation InsertEvent(
      $userId: UUID!
      $eventType: String!
      $latitude: Float
      $longitude: Float
      $triggeredBy: String!
      $severityLevel: String
      $status: String
    ) {
      events_insert(data: {
        userId: $userId
        eventType: $eventType
        latitude: $latitude
        longitude: $longitude
        triggeredBy: $triggeredBy
        severityLevel: $severityLevel
        status: $status
        createdAt: request_time()
      })
    }
  `;

  return await graphql(mutation, eventData);
}

/**
 * Get nearby users based on location
 * Note: This returns all users - filtering by distance should be done in app logic
 * or we need to add PostGIS support for geo queries
 * @param {number} limit - Max users to return
 * @returns {Promise<Array>}
 */
async function getNearbyUsers(limit = 50) {
  const query = `
    query GetActiveUsers {
      user(orderBy: {field: lastLogin, direction: DESC}) {
        uuid
        name
        pushToken
        deviceType
        isActive
      }
    }
  `;

  const result = await graphql(query);
  return result.user || [];
}

/**
 * Get all events
 * @returns {Promise<Array>}
 */
async function getAllEvents() {
  const query = `
    query GetAllEvents {
      events(orderBy: {field: createdAt, direction: DESC}) {
        euid
        userId
        eventType
        severityLevel
        status
        latitude
        longitude
        triggeredBy
        createdAt
      }
    }
  `;

  const result = await graphql(query);
  return result.events || [];
}

/**
 * Insert event responder record
 * @param {object} responderData - Responder data
 * @returns {Promise<void>}
 */
async function insertEventResponder(responderData) {
  const mutation = `
    mutation InsertResponder(
      $eventId: UUID!
      $responderUserId: UUID!
      $responseStatus: String
    ) {
      eventResponders_insert(data: {
        eventId: $eventId
        responderUserId: $responderUserId
        responseStatus: $responseStatus
        joinedAt: request_time()
      })
    }
  `;

  return await graphql(mutation, responderData);
}

module.exports = {
  graphql,
  insertEvent,
  getNearbyUsers,
  getAllEvents,
  insertEventResponder,
};
