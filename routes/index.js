const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.nameFunction);
routes.get('/moreNames', myController.moreNames);

//lesson 2
routes.use('/contacts', require('./contacts'));

module.exports = routes;