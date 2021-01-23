// Directory.js


const DirectorySchema = new mongoose.Schema({
  photo: {type: String, required: true}, // 
  type: { type: String,  enum: ['veterinario', 'entrenador', 'alimentos'] ,required: true}, 
  representative: { type: String,required: true}, 
  address: {type: String, required: true},
  phone: { type: String,required: true},
  days: { type: String, required: true}, 
  hour: {type: String, required: true}, 
  published_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAdmin'}, 
  orpublished_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'}, 
}, { timestamps: true }

);

DirectorySchema.methods.publicData = function(){
  return {
    id: this.id,
    type: this.type,
    representative: this.representative,
    address: this.address,
    phone: this.phone,
    days: this.days,
    hour: this.hour,
    published_by: this.published_by,
    orpublished_by: this.orpublished_by
  };
};

mongoose.model('Event', EventSchema);
