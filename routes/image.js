const express = require("express");
const ExpressFormidable = require("express-formidable");
const { imageUploadController } = require("../controllers/imageUpload");
const router = express.Router();

router.post(
    "/uploadImage",
    ExpressFormidable({ maxFieldsSize: 5*2024*2024}),
    imageUploadController
)

module.exports = router;