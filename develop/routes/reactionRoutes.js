
const express = require('express');
const router = express.Router();
const reactionController = require('../controllers/reactionController');

router.post('/reactions', reactionController.createReaction);
router.delete('/reactions', reactionController.deleteReaction);


module.exports = router;
