// Request.js
const mongoose = require('mongoose');                         //Importando mongoose.

const RequestSchema = new mongoose.Schema({
    required_pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet'}, 
    required_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdoptant'}, 
    followed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'}, 
    status: {type: String, enum: ['created', 'pending', 'closed'] ,required: true},
  }, { timestamps: true });
  
  RequestSchema.methods.publicData = function(){
    return {
      id: this.id,
      required_pet: this.required_pet,
      required_by: this.required_by,
      followed_by: this.followed_by,
      status: this.status
    };
  };
  
  mongoose.model('Request', RequestSchema);