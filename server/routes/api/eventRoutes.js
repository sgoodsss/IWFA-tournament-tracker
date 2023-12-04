//API ENDPOINT- api/events/ 
// import Event model
const { Event } = require('../../models');
const router = require('express').Router();

const {
    getSingleEvent,
    getAllEvents,
} = require('../../controllers/event-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// CHECK ROUTE ENDPOINTS
router.route('/').get(getSingleEvent);

router.route('/').get(getAllEvents);

module.exports = router;