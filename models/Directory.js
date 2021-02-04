// Directory.js
// UserAdmin.js
const mongoose = require('mongoose');                         //Importando mongoose.

const DirectorySchema = new mongoose.Schema({
  photo: {type: String, required: true}, // 
  type: { type: String,  enum: ['veterinario', 'entrenador', 'alimentos'] ,required: true}, 
  representative: { type: String,required: true}, 
  address: {type: String, required: true},
  phone: { type: String,required: true},
  days: { type: String, required: true}, 
  hour: {type: String, required: true}, 
  published_by_1: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdmin'}, 
  published_by_2: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'}, 
}, { timestamps: true }

);

DirectorySchema.methods.publicData = function(){
  return {
    id: this.id,
    photo: this.photo,
    type: this.type,
    representative: this.representative,
    address: this.address,
    phone: this.phone,
    days: this.days,
    hour: this.hour,
    published_by_1: this.published_by,
    published_by_2: this.orpublished_by,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model('Directory', DirectorySchema);
