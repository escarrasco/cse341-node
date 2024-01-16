const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.nameFunction);
routes.get('/moreNames', myController.moreNames);

module.exports = routes;