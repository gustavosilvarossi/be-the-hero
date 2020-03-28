const express = require('express');

const ongController = require('./controllers/ongController');
const IncidentsController = require('./controllers/IndidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;