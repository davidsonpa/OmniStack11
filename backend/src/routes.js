

   const express = require('express');
   const OngController = require('./controllers/Ongcontroller');
   const IncidentController = require('./controllers/Incidentcontroller');
   const ProfileController = require('./controllers/ProfileController');
   const SessionController = require('./controllers/SessionController');
   const routes = express.Router();

        routes.post('/session', SessionController.index);
    
        //OngsRoutes
        routes.post('/ongs',  OngController.create);
        routes.get('/ongs', OngController.index);
        routes.put('/ongs', OngController.update);
        routes.delete('/ongs', OngController.delete);
        routes.get('/profile', ProfileController.index);

        //IncidentsRoutes
        routes.post('/incidents',  IncidentController.create);
        routes.get('/incidents', IncidentController.index);
        routes.put('/incidents', IncidentController.update);
        routes.delete('/incidents/:id', IncidentController.delete);
    module.exports = routes;
