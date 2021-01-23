// Pet.js

const PetSchema = new mongoose.Schema({
    name: {type: String, required: true}, // 
    photo: { type: String ,required: true}, 
    category: { type: String, enum: ['dog', 'cat','other'] ,required: true}, 
    specie: { type: String,required: true}, 
    sex: {type: String, enum: ['F', 'M'] ,required: true},
    age: {type: Number,required: true},
    size: {type: String, enum: ['S', 'M', 'G'] ,required: true},
    description: { type: String,required: true}, 
    iskidfriendly: {type: String, enum: ['S', 'N'] ,required: true},
    isdogfriendly: {type: String, enum: ['S', 'N'] ,required: true},
    iscatfriendly: {type: String, enum: ['S', 'N'] ,required: true},
    sterilized: {type: String, enum: ['S', 'N'] ,required: true},
    vaccines: {type: String, enum: ['S', 'N'] ,required: true},
    payment: {type: String, enum: ['none', 'money', 'food'] ,required: true},
    status: {type: String, enum: ['disponible', 'pendiente', 'adoptado'] ,required: true},
    posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRescuer'}, 
  }, { timestamps: true });
  
PetSchema.methods.publicData = function(){
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      sex: this.sex,
      age: this.age,
      size: this.size,
      description: this.description,
      sterilized: this.sterilized,
      vaccines: this.vaccines,
      payment: this.payment,
      status: this.status,
      posted_by: this.posted_by
    };
  };
  
  mongoose.model('Pet', PetSchema);