const express = require('express');
const OngController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const ProfilleControler = require('./controller/ProfilleControler');
const SessionController = require('./controller/SessionController');


const routes = express.Router();
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/incidents/:ongs_id', ProfilleControler.index);

    
module.exports = routes;

