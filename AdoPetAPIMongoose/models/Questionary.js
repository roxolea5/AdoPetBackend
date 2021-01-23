// Questionary.js


const QuestionarySchema = new mongoose.Schema({
  address: {type: String, required: true}, // 
  pet_owner: { type: String, enum: ['S', 'N'] ,required: true}, 
  place_owner: { type: String, enum: ['S', 'N'] ,required: true}, 
  family_members: {type: Number, required: true},
  family_agreement: { type: String, enum: ['S', 'N'] ,required: true},
  sended_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdoptant'}, 
  reviewed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'}, 
}, { timestamps: true });

QuestionarySchema.methods.publicData = function(){
  return {
    id: this.id,
    address: this.address,
    pet_owner: this.pet_owner,
    place_owner: this.place_owner,
    family_members: this.family_members,
    family_agreement: this.family_agreement,
    sended_by: this.sended_by,
    reviewed_by: this.reviewed_by
  };
};

mongoose.model('Questionary', QuestionarySchema);
