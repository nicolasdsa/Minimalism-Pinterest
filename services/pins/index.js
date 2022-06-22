const express = require("express");
const router = express.Router();
const routeMiddleware = require('../../middlewares/route');
const authenticationMiddleware = require('../../middlewares/authentication');
const listPins = require('./list');
const createPins = require('./create');
const mePins = require('./me')
const commentPins = require('./comment');
const reactPins = require('./react');

router.get('/', authenticationMiddleware, routeMiddleware(listPins));
router.get('/me/' ,authenticationMiddleware, routeMiddleware(mePins));
router.post('/', authenticationMiddleware, routeMiddleware(createPins));
router.post('/:id/comments', authenticationMiddleware, routeMiddleware(commentPins));
router.post('/:id/react', authenticationMiddleware, routeMiddleware(reactPins));

module.exports = router;