// Event.js


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
  