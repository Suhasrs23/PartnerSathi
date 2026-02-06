/**
 * SOS Emergency Alert Controller
 * Handles emergency SOS requests and notifications
 */

const { insertEvent, getNearbyUsers, insertEventResponder } = require('../services/dataconnect');
const { sendSOSNotification } = require('../services/notifications');

/**
 * Handle incoming SOS alert
 * POST /sos
 * Body: { eventType, latitude, longitude, severityLevel }
 */
async function handleSOS(req, res) {
  try {
    const { eventType, latitude, longitude, severityLevel } = req.body;
    
    // Get user ID from authenticated token (or use test ID for now)
    const userId = req.user?.uid || '550e8400-e29b-41d4-a716-446655440000';

    // Validate required fields
    if (!eventType) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'eventType is required',
      });
    }

    console.log('SOS Alert received:', {
      userId,
      eventType,
      latitude,
      longitude,
      severityLevel,
    });

    // 1. Insert event into database
    await insertEvent({
      userId,
      eventType,
      latitude: latitude || null,
      longitude: longitude || null,
      triggeredBy: 'manual',
      severityLevel: severityLevel || 'medium',
      status: 'active',
    });

    console.log('Event inserted successfully');

    // 2. Find nearby users (delivery partners)
    // TODO: Implement actual geo-proximity filtering using PostGIS
    // For now, get active users with push tokens
    const nearbyUsers = await getNearbyUsers(50);
    
    // Filter users with valid push tokens and active status
    const validTokens = nearbyUsers
      .filter(user => user.pushToken && user.isActive)
      .map(user => user.pushToken);

    console.log(`Found ${validTokens.length} nearby users with push tokens`);

    // 3. Send push notifications to nearby users
    if (validTokens.length > 0) {
      const notificationResult = await sendSOSNotification(validTokens, {
        eventType,
        latitude,
        longitude,
        distance: 'nearby', // TODO: Calculate actual distance
        senderId: userId,
        eventId: 'generated-uuid', // TODO: Get actual event UUID from insert
      });

      console.log('Notifications sent:', {
        success: notificationResult.successCount,
        failure: notificationResult.failureCount,
      });
    }

    // 4. Return success response
    return res.status(200).json({
      success: true,
      message: 'SOS alert sent successfully',
      data: {
        eventType,
        notificationsSent: validTokens.length,
      },
    });

  } catch (error) {
    console.error('SOS handler error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
    });
  }
}

/**
 * Handle responder acknowledgment
 * POST /events/:eventId/respond
 * Body: { responseStatus }
 */
async function handleRespond(req, res) {
  try {
    const { eventId } = req.params;
    const { responseStatus } = req.body;
    const responderUserId = req.user?.uid || '550e8400-e29b-41d4-a716-446655440001';

    if (!eventId || !responseStatus) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'eventId and responseStatus are required',
      });
    }

    // Insert responder record
    await insertEventResponder({
      eventId,
      responderUserId,
      responseStatus,
    });

    console.log('Responder recorded:', { eventId, responderUserId, responseStatus });

    // TODO: Notify the SOS sender that help is coming

    return res.status(200).json({
      success: true,
      message: 'Response recorded successfully',
    });

  } catch (error) {
    console.error('Respond handler error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
    });
  }
}

module.exports = {
  handleSOS,
  handleRespond,
};
