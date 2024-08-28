const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require("cors")
const formRoutes = require('./routes/form')
const imageRoutes = require('./routes/image')

const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json({ limit: "3mb" }));
app.use(cors());


// Connect to MongoDB
connectDB();

// Routes
app.use('/api/form', formRoutes);
app.use('/api/image', imageRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
