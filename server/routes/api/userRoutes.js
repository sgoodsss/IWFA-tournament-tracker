//API ENDPOINT- api/users/ 
//import user model
const { User } = require('../../models');
const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/user').get(authMiddleware, getSingleUser);

// Old route- GET all Users
router.get('/', (req, res) => {
  User.find({}).populate("formEntries").then((userData) => {
    res.json(userData);
  });
});

module.exports = router;