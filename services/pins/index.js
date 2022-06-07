const express = require("express");
const router = express.Router();
const routeMiddleware = require('../../middlewares/route');
const authenticationMiddleware = require('../../middlewares/authentication');
const listPins = require('./list');
const createPins = require('./create');

router.get('/', authenticationMiddleware, routeMiddleware(listPins));
router.post('/', authenticationMiddleware, routeMiddleware(createPins));
module.exports = router;