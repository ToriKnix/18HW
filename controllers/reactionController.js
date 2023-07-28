const Reaction = require('../models/reaction');

exports.createReaction = async (req, res) => {
  try {
    const newReaction = await Reaction.create(req.body);
    res.status(201).json(newReaction);
  } catch (error) {
    res.status(500).json({ error: 'Error creating reaction' });
  }
};

// add a function that will delete also

