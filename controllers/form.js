const FormModel = require('../models/form');

// Create a new form
const createForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new FormModel(formData);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  createForm
};
