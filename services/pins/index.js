const express = require("express");
const router = express.Router();
const routeMiddleware = require('../../middlewares/route');
const authenticationMiddleware = require('../../middlewares/authentication');
const listPins = require('./list');
const createPins = require('./create');
const mePins = require('./me')
router.get('/', authenticationMiddleware, routeMiddleware(listPins));
router.get('/me/' ,authenticationMiddleware, routeMiddleware(mePins));
router.post('/', authenticationMiddleware, routeMiddleware(createPins));

module.exports = router;