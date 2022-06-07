const express = require("express");
const router = express.Router();
const routeMiddleware = require('../../middlewares/route');
const authenticationMiddleware = require('../../middlewares/authentication');
const uploadImage = require('./upload');

router.post("/", authenticationMiddleware, routeMiddleware(uploadImage));

module.exports = router;