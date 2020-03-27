const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

// Listar ongs
routes.get('/ongs', OngController.index);
// Cadastrar ong
routes.post('/ongs', OngController.create);

// Login
routes.post('/sessions', SessionController.create);

// Cadastrar casos
routes.post('/incidents', IncidentController.create);
// Listar Casos
routes.get('/incidents', IncidentController.index);
// Listar casos específicos de uma ONG
routes.get('/profile', ProfileController.index);
// Deletar Casos
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;