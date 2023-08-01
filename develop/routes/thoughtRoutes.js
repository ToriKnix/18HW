const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

router.post('/thoughts', thoughtController.createThought);
router.get('/thoughts', thoughtController.getAllThoughts);
router.get('/thoughts/:thoughtId', thoughtController.getThoughtById);
router.put('/thoughts/:thoughtId', thoughtController.updateThought);
router.delete('/thoughts/:thoughtId', thoughtController.deleteThought);

module.exports = router;
