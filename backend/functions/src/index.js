/**
 * Firebase Cloud Functions Entry Point
 * Exports HTTP endpoints for PartnerSathi backend
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { handleSOS, handleRespond } = require('./controllers/sos');
const { verifyFirebaseToken, optionalAuth } = require('./middleware/auth');

// Initialize Firebase Admin
admin.initializeApp();

/**
 * SOS Emergency Alert Endpoint
 * POST /sos
 * Headers: Authorization: Bearer <firebase-id-token>
 * Body: { eventType: string, latitude: number, longitude: number, severityLevel: string }
 */
exports.sos = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // For development, use optional auth (remove in production)
  await optionalAuth(req, res, () => {});
  
  return handleSOS(req, res);
});

/**
 * Responder Acknowledgment Endpoint
 * POST /respond
 * Headers: Authorization: Bearer <firebase-id-token>
 * Body: { eventId: string, responseStatus: string }
 */
exports.respond = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await optionalAuth(req, res, () => {});
  
  return handleRespond(req, res);
});

/**
 * Health Check Endpoint
 * GET /health
 */
exports.health = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  return res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
  });
});
