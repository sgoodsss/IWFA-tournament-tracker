// API ENDPOINT- api/forms/ 
// import Form model
const { Form, User } = require('../../models');
const router = require('express').Router();

const {
  saveForm,
  deleteForm,
} = require('../../controllers/form-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// CHECK ROUTE ENDPOINTS
// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').put(authMiddleware, saveForm);

router.route('/').delete(deleteForm).put(authMiddleware);

module.exports = router;