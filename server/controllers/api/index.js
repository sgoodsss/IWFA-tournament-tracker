const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const adRoutes = require('./teacherRoutes');
// const goalRoutes = require('./goalRoutes');

router.use('/users', userRoutes);
// router.use('/teacher', teacherRoutes);
// router.use('/goal', goalRoutes);

module.exports = router;