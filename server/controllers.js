const Pets = require('./models')('mongodb://localhost/pets');

let good = (data) => ({status: 'good', data:data});
let bad = (errs) => ({status: 'bad', data:errs});

function readAll(req,res){
    Pets.find({})
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}

function addPet(req,res){
    Pets.create(req.body)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
function readOne(req,res){
    Pets.findById(req.params.id)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
function updateOne(req,res){
    console.log(req.body);
    // console.log(req.params.id);
    Pets.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
function deleteOne(req,res){
    Pets.findByIdAndRemove(req.params.id)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
module.exports = {readAll, addPet, readOne, updateOne, deleteOne};