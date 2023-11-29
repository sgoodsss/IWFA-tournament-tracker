const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');
const goalRoutes = require('./goalRoutes');

router.use('/student', studentRoutes);
router.use('/teacher', teacherRoutes);
router.use('/goal', goalRoutes);

module.exports = router;