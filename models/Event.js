// Event.js
const mongoose = require('mongoose');                         //Importando mongoose.

const EventSchema = new mongoose.Schema({
    photo: {type: String, required: true}, 
    name: {type: String, required: true}, 
    date: { type: Date,
      required: true}, 
    place: {type: String, required: true},
    description: {type: String, required: true},
    user_admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdmin'},
    user_rescuer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'},
  }, {timestamps: true }
  );
  
  EventSchema.methods.publicData = function(){
    return {
      id: this.id,
      photo: this.photo,
      name: this.name,
      date: this.date,
      place: this.place,
      description: this.description,
      user_admin_id: this.user_admin_id,
      user_rescuer_id: this.user_rescuer_id,
      createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
  };
  
  mongoose.model('Event', EventSchema);