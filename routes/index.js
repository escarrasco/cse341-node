const routes = require('express').Router();

//lesson 1
/*
const myController = require('../controllers');
routes.get('/', myController.nameFunction);
routes.get('/moreNames', myController.moreNames);
*/

//lesson 4 swagger route
routes.use('/', require('./swagger'));

//lesson 2
routes.use('/contacts', require('./contacts'));


module.exports = routes;