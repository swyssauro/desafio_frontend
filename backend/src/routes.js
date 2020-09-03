const express = require('express');
const routes = express.Router();

const SessionControl = require('./controllers/Session');
const ProfileControl = require('./controllers/Profile');
const FuncionarioControl = require('./controllers/Funcionario');
const CargosControl = require('./controllers/Cargos');


routes.post('/session', SessionControl.create);
routes.get('/profile', ProfileControl.index);

routes.get('/funcionarios', FuncionarioControl.index);
routes.post('/funcionarios', FuncionarioControl.create);

routes.get('/cargos', CargosControl.index);
routes.post('/cargos', CargosControl.create);
routes.delete('/cargos/:id', CargosControl.delete);


module.exports = routes;