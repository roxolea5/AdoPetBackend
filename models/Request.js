// Request.js
const mongoose = require('mongoose');                         //Importando mongoose.

const RequestSchema = new mongoose.Schema({
    pet_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Pet'}, 
    user_adoptant_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserAdoptant'}, 
    user_rescuer_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserRescuer'}, 
    status: {type: String, enum: ['pending', 'accepted', 'rejected'] ,required: true},
  }, { collection: "requests", timestamps: true }
  );
  
  RequestSchema.methods.publicData = function(){
    return {
      id: this.id,
      pet_id: this.required_pet,
      user_adoptant_id: this.required_by,
      user_rescuer_id: this.followed_by,
      status: this.status
    };
  };
  
  mongoose.model('Request', RequestSchema);