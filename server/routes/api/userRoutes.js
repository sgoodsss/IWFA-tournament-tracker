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

router.get('/', (req, res) => {
  User.find({}).populate("formEntries").then((userData) => {
    res.json(userData);
  });
});

module.exports = router;



















// //CREATE - Route to create a new User
// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(200).json(newUser);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //POST user login route - logs in through collecting user form data 
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ email: req.body.email });
//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const userPassword = await userData.isCorrectPassword(req.body.password);

//     if (!userPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }
//     res.json({ user: userData, message: 'You are now logged in!'})
//     // req.session.save(() => {
//     //   req.session.user_id = studentData.id;
//     //   req.session.logged_in = true;

//     //   res.json({ user: studentData, message: 'You are now logged in!' });
//     // });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// //Route to get all Users
// router.get('/', (req, res) => {
//   User.find({
//     // where: {
//     //   id: req.session.user_id,
//     // },
//   }).populate("formEntries").then((userData) => {
//     res.json(userData);
//   });

// });

// // Route to 
// router.put('/start', async (req, res) => {
//   const userEmail = "corey@email.com"
//   try {
//    const formData = await Form.create(req.body)
//    const updatedUser = await User.findOneAndUpdate({email: userEmail}, {$push: { formEntries: formData }}, {new: true, runValidators: true})
//    console.log(updatedUser)
//   //  Add an if statement if you don't find a user's email
//   // console.log(formData)
//   } catch (error) {
//     res.json(error)
//   }

// });


// // Route to get students by id 
// router.get('/:id', async (req, res) => {
//   try {
//     const myStudent = await Student.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!myStudent) {
//       res.status(404).json({ message: "No student with that ID was found :-(" });
//       return;
//     }

//     res.status(200).json(myStudent);

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Login route - checks if student is logged in
// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

// // Route to update student by ID
// router.put('/', async (req, res) => {
//   console.log(req.body)
//   try {
//     const dailyScore = await Student.update(req.body, {
//       where: {
//         id: req.session.user_id,
//       },
//     });
//     if (!dailyScore) {
//       res.status(404).json({ message: 'Score could not be updated!' });
//       return;
//     }
//     res.status(200).json(dailyScore);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// // Route to delete student by id
// router.delete('/:id', async (req, res) => {
//   try {
//     const studentData = await Student.destroy({
//       where: {
//         id: req.params.id
//       },
//     });

//     if (!studentData) {
//       res.status(404).json({ message: 'No student found with this id!' });
//       return;
//     }

//     res.status(200).json(studentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;