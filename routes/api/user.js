const router = require('express').Router();
const profileController = require('../../controller/profileController')

module.exports = router;

router.route('/').post(profileController.createOneUser);

router.route('/:email').get(profileController.findOneUser);