const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Must be at least 3 characters"],

    },
    type: {
        type: String,
        required: true,
        minlength: [3, "Must be at least 3 characters"],
    },

    description: {
        type: String,
        required: true,
        minlength: [3, "Must be at least 3 characters"],
    },

    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },
    
    skill3: {
        type: String,
    },

    vote: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

function createPetConnection(db_string){
    mongoose.connect(db_string);
    return mongoose.model('pets', PetSchema);

}

module.exports = createPetConnection;