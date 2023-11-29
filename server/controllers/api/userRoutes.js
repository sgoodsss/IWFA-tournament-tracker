const router = require('express').Router();
const Student = require('../../models/Student');

//CREATE - Route to create a new student
router.post('/', async (req, res) => {
  try {
    const newStudent = await Student.create({
      ...req.body,
      teacher_id: req.session.user_id,
    });
    res.status(200).json(newStudent);
  } catch (err) {
    res.status(400).json(err);
  }
});

//POST student login route - logs in through collecting user form data 
router.post('/login', async (req, res) => {
  try {
    const studentData = await Student.findOne({ where: { userName: req.body.email } });
    console.log('login', studentData)
    if (!studentData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const studentPassword = await studentData.checkPassword(req.body.password);

    if (!studentPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = studentData.id;
      req.session.logged_in = true;

      res.json({ user: studentData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


//Route to get all students by student id
router.get('/', (req, res) => {
  Student.findAll({
    where: {
      id: req.session.user_id,
    },
  }).then((studentData) => {
    res.json(studentData);
  });

});

// Route to get all students by teacher id
router.get('/teach', (req, res) => {
  Student.findAll({
    where: {
      teacher_id: req.session.user_id,
    },
  }).then((studentData) => {
    res.json(studentData);
  });

});


// Route to get students by id 
router.get('/:id', async (req, res) => {
  try {
    const myStudent = await Student.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!myStudent) {
      res.status(404).json({ message: "No student with that ID was found :-(" });
      return;
    }

    res.status(200).json(myStudent);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route - checks if student is logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Route to update student by ID
router.put('/', async (req, res) => {
  console.log(req.body)
  try {
    const dailyScore = await Student.update(req.body, {
      where: {
        id: req.session.user_id,
      },
    });
    if (!dailyScore) {
      res.status(404).json({ message: 'Score could not be updated!' });
      return;
    }
    res.status(200).json(dailyScore);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Route to delete student by id
router.delete('/:id', async (req, res) => {
  try {
    const studentData = await Student.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!studentData) {
      res.status(404).json({ message: 'No student found with this id!' });
      return;
    }

    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;