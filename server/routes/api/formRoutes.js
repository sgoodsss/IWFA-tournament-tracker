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
router.route('/').put(saveForm).put(authMiddleware);

router.route('/').delete(deleteForm).put(authMiddleware);


// Old route- Update formEntries array User HARDCODED to corey's email
router.put('/start', async (req, res) => {
  const userEmail = "corey@email.com"
  try {
   const formData = await Form.create(req.body)
   const updatedUser = await User.findOneAndUpdate(
      {email: userEmail}, 
      {$push: { formEntries: formData }}, 
      {new: true, runValidators: true})

   console.log(updatedUser)
  //  Add an if statement if you don't find a user's email
  if (!userEmail) {
    return res.status(400).json({ message: 'Wrong email!' });
  }
  // console.log(formData)
  } catch (error) {
    return res.status(400).json(error);
  }

});

  // Route to get form by user email 
  router.get('/', async (req, res) => {
    try {
      const myForms = await Goal.find({
        // REPLACE WITH USER EMAIL TAKEN FROM PROPS
        // where: {
        //   student_id: req.session.user_id,
        // },
      });
  
      if (!myForms){
        res.status(404).json({message: "No forms were found for that user :-("});
        return;
      }
  
      res.status(200).json(myForms);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;