// Event.js
// UserAdmin.js
const mongoose = require('mongoose');                         //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator, pendiente de instalar.
const crypto = require('crypto');                             //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken');                          //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;  


const EventSchema = new mongoose.Schema({
    photo: {type: String, required: true}, // 
    name: { type: String,required: true}, 
    date: { type: Date,required: true}, 
    place: {type: String, required: true},
    description: { type: String,required: true},
    published_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdmin'}, 
    orpublished_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'}, 
  }, { timestamps: true });
  
  EventSchema.methods.publicData = function(){
    return {
      id: this.id,
      name: this.name,
      date: this.date,
      place: this.place,
      description: this.description,
      published_by: this.published_by,
      orpublished_by: this.orpublished_by
    };
  };
  
  mongoose.model('Event', EventSchema);
  