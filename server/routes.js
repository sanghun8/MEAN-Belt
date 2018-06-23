const bp = require('body-parser');
const api = require('./controllers');

function appAPI(app){
    app.use(bp.json());
    app.get('/api/pets', (req,res) => api.readAll(req,res));
    app.post('/api/pets', (req, res) => api.addPet(req,res));
    app.get('/api/pets/:id', (req, res) => api.readOne(req,res));
    app.put('/api/pets/:id', (req, res) => api.updateOne(req,res));
    app.delete('/api/pets/:id', (req, res) => api.deleteOne(req,res));
}

module.exports = appAPI;