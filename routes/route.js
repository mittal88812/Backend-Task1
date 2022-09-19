const router = require('express').Router();
const routeController = require('../controllers/routeControllers');

router.get('/', routeController.getUserDetails);

router.patch('/updateDetails', routeController.updateDetails);

module.exports = router;