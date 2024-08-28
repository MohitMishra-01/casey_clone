const mongoose = require('mongoose');

// Define the Option schema
const OptionSchema = new mongoose.Schema({
  text: { type: String, required: false },
  weightage: { type: Number, required: false }
});

// Define the Image schema
const ImageSchema = new mongoose.Schema({
  src: { type: String, required: false },
  title: { type: String, required: false }
});

// Define the main schema
const FormSchema = new mongoose.Schema({
  caseName: { type: String, required: true },
  criticalText: { type: String, required: false },
  images: [ImageSchema],
  options: [OptionSchema],
  promptText: { type: String, required: true },
  responseType: { 
    type: String, 
    enum: ['text', 'numeric', 'MCQS', 'MCQM'], 
    required: true 
  }
});

// Create the model
const FormModel = mongoose.model('Form', FormSchema);

module.exports = FormModel;
