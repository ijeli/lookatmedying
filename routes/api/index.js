const router = require('express').Router();
const profileRoutes = require('./profile');
const symptomRoutes = require('./symptom');
const userRoutes = require('./user');


router.use('/profile', profileRoutes);
router.use('/symptom', symptomRoutes);
router.use('/user', userRoutes);


module.exports = router;