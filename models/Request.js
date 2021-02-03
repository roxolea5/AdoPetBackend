// Request.js
const mongoose = require('mongoose');                         //Importando mongoose.

const RequestSchema = new mongoose.Schema({
    pet_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Pet'}, 
    user_adoptant_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserAdoptant'}, 
    user_rescuer_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserRescuer'}, 
    status: {type: String, enum: ['pending', 'accepted', 'rejected'] ,required: true},
  }, {timestamps: true }
  );
  
  RequestSchema.methods.publicData = function(){
    return {
      id: this.id,
      pet_id: this.pet_id,
      user_adoptant_id: this.user_adoptant_id,
      user_rescuer_id: this.user_rescuer_id,
      status: this.status
    };
  };
  
  mongoose.model('Request', RequestSchema);