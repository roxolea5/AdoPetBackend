// Pet.js
const mongoose = require('mongoose');                         //Importando mongoose.

const QuestionarySchema = new mongoose.Schema({
    address: {type: String, required: true},
    pet_owner: {type: String, enum: ['Y', 'N'] ,required: true},
    place_owner: {type: String, enum: ['Y', 'N'] ,required: true},
    family_members: {type: Number, required: true},
    family_agreement: {type: String, enum: ['Y', 'N'] ,required: true},
    user_adoptant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdoptant'},
    user_rescuer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'},
  }, { timestamps: true });
  
QuestionarySchema.methods.publicData = function(){
    return {
        address: this.address,
        pet_owner: this.pet_owner,
        place_owner: this.place_owner,
        family_members: this.family_members,
        family_agreement: this.family_agreement,
        user_adoptant_id: this.user_adoptant_id,
        user_rescuer_id: this.user_rescuer_id,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
  };
  
  mongoose.model('Questionary', QuestionarySchema);