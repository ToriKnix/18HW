const Thought = require('../models/thought');

exports.createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (error) {
    res.status(500).json({ error: 'Error creating thought' });
  }
};

exports.getAllThoughts = async (req, res) => {
  try {
    const allThoughts = await Thought.find();
    res.status(200).json(allThoughts);
  } catch (error) {
    res.status(500).json({ error: 'Error getting thoughts' });
  }
};

exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Error getting thought' });
  }
};

exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: 'Error updating thought' });
  }
};

exports.deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.status(200).json(deletedThought);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting thought' });
  }
};
