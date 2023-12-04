// import user model
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

router.route('/profile').get(authMiddleware, getSingleUser);

// Old route- GET all Users
router.get('/', (req, res) => {
  User.find({}).populate("formEntries").then((userData) => {
    res.json(userData);
  });
});

// Old route- Log in User HARDCODED to corey's email
router.put('/start', async (req, res) => {
  const userEmail = "corey@email.com"
  try {
   const formData = await Form.create(req.body)
   const updatedUser = await User.findOneAndUpdate({email: userEmail}, {$push: { formEntries: formData }}, {new: true, runValidators: true})
   console.log(updatedUser)
  //  Add an if statement if you don't find a user's email
  if (!userEmail) {
    return res.status(400).json({ message: 'Wrong email!' });
  }
  // console.log(formData)
  } catch (error) {
    res.json(error)
  }

});

module.exports = router;