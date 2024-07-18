const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');

router.post('/', mechanicController.createMechanic);
router.get('/', mechanicController.getMechanics);
router.put('/:id', mechanicController.updateMechanic);
router.delete('/:id', mechanicController.deleteMechanic);

module.exports = router;
