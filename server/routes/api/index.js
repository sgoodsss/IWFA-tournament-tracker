const router = require('express').Router();
const userRoutes = require('./userRoutes');
const formRoutes = require('./formRoutes');
// const eventRoutes = require('./eventRoutes');
// const adminRoutes = require('./adminRoutes');

router.use('/users', userRoutes);
router.use('/forms', formRoutes);
// router.use('/events', eventRoutes);
// router.use('/admin', adminRoutes);

module.exports = router;