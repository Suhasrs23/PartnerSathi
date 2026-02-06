/**
 * Firebase Cloud Messaging (FCM) Notification Service
 * Sends push notifications to mobile devices
 */

const admin = require('firebase-admin');

// Initialize Firebase Admin (only once)
if (!admin.apps.length) {
  admin.initializeApp();
}

/**
 * Send SOS notification to multiple tokens
 * @param {Array<string>} tokens - FCM device tokens
 * @param {object} sosData - SOS alert data
 * @returns {Promise<object>} - Send result
 */
async function sendSOSNotification(tokens, sosData) {
  if (!tokens || tokens.length === 0) {
    console.log('No tokens provided, skipping notification');
    return { successCount: 0, failureCount: 0 };
  }

  const { eventType, latitude, longitude, distance, senderId, eventId } = sosData;

  const message = {
    tokens: tokens.filter(Boolean), // Remove null/undefined tokens
    notification: {
      title: `🚨 Emergency Alert: ${eventType}`,
      body: `A delivery partner needs help nearby (${distance || 'Unknown'} away)`,
    },
    data: {
      type: 'SOS_ALERT',
      eventId: eventId || '',
      eventType: eventType || 'Emergency',
      latitude: String(latitude || 0),
      longitude: String(longitude || 0),
      senderId: senderId || '',
      timestamp: new Date().toISOString(),
    },
    android: {
      priority: 'high',
      notification: {
        channelId: 'emergency_alerts',
        sound: 'default',
        priority: 'max',
        visibility: 'public',
        clickAction: 'FLUTTER_NOTIFICATION_CLICK',
      },
    },
    apns: {
      payload: {
        aps: {
          alert: {
            title: `🚨 Emergency Alert: ${eventType}`,
            body: `A delivery partner needs help nearby`,
          },
          sound: 'default',
          badge: 1,
          'content-available': 1,
        },
      },
    },
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    
    console.log('Notification sent:', {
      success: response.successCount,
      failure: response.failureCount,
      totalTokens: tokens.length,
    });

    // Log failures for debugging
    if (response.failureCount > 0) {
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          console.error(`Failed to send to token ${idx}:`, resp.error);
        }
      });
    }

    return response;
  } catch (error) {
    console.error('Error sending notifications:', error);
    throw error;
  }
}

/**
 * Send response acknowledgment to SOS sender
 * @param {string} token - FCM device token of sender
 * @param {object} responseData - Response data
 * @returns {Promise<string>} - Message ID
 */
async function sendResponseAcknowledgment(token, responseData) {
  if (!token) {
    console.log('No token provided for acknowledgment');
    return null;
  }

  const { responderName, responseStatus } = responseData;

  const message = {
    token,
    notification: {
      title: 'Help is on the way!',
      body: `${responderName} is responding to your alert`,
    },
    data: {
      type: 'RESPONSE_ACK',
      responderName: responderName || 'Someone',
      responseStatus: responseStatus || 'accepted',
      timestamp: new Date().toISOString(),
    },
    android: {
      priority: 'high',
    },
  };

  try {
    const messageId = await admin.messaging().send(message);
    console.log('Acknowledgment sent:', messageId);
    return messageId;
  } catch (error) {
    console.error('Error sending acknowledgment:', error);
    throw error;
  }
}

module.exports = {
  sendSOSNotification,
  sendResponseAcknowledgment,
};
