/**
 * Firebase Authentication Middleware
 * Verifies Firebase ID tokens from incoming requests
 */

const admin = require('firebase-admin');

/**
 * Verify Firebase ID token from request header
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware
 */
async function verifyFirebaseToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Missing or invalid Authorization header',
    });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      phoneNumber: decodedToken.phone_number,
    };
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid or expired token',
    });
  }
}

/**
 * Optional auth - sets req.user if token is valid, continues if not
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware
 */
async function optionalAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next();
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      phoneNumber: decodedToken.phone_number,
    };
  } catch (error) {
    console.error('Optional auth failed:', error);
  }

  next();
}

module.exports = {
  verifyFirebaseToken,
  optionalAuth,
};
