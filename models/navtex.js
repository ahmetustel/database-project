const mongoose = require('mongoose');

const navtexSchema = new mongoose.Schema({
    navtexContent: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Navtex', navtexSchema);