const express = require('express');
const {
  createForm,
} = require('../controllers/form');

const router = express.Router();

// Routes for handling forms
router.post('/createForm', createForm);


module.exports = router;
