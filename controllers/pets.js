const mongoose = require('mongoose')
const Pet = mongoose.model('Pet')

function createPet(req, res, next) {
  const body = req.body
  const pet = new Pet(body)
  pet.save().then(pet => {
    res.status(201).send(pet)
  }).catch(next)
}


function getPets(req, res, next) {
  if(req.params.id){
    Pet.findById(req.params.id, (err, pet) => {
        if (!pet || err) {
          return res.sendStatus(401)
        }
        return res.json(pet.publicData());
      }).populate('posted_by', 'username first_name last_name').catch(next);
  } else {
    Pet.find().then(pets=>{
      res.send(pets)
    }).catch(next)
  }
}

function modifyPet(req, res, next) {
  Pet.findById(req.params.id).then(pet => { //Find received pet
    if (!pet) { return res.sendStatus(401); }
    let newInfo = req.body
    if (typeof newInfo.name !== 'undefined')
      pet.name = newInfo.name
    if (typeof newInfo.photo !== 'undefined')
      pet.photo = newInfo.photo
    if (typeof newInfo.category !== 'undefined')
      pet.category = newInfo.category
    if (typeof newInfo.specie !== 'undefined')
      pet.specie = newInfo.specie
    if (typeof newInfo.sex !== 'undefined')
      pet.sex = newInfo.sex
    if (typeof newInfo.age !== 'undefined')
      pet.age = newInfo.age
    if (typeof newInfo.size !== 'undefined')
      pet.size = newInfo.size
    if (typeof newInfo.description !== 'undefined')
      pet.description = newInfo.description
    if (typeof newInfo.iskidfriendly !== 'undefined')
      pet.iskidfriendly = newInfo.iskidfriendly    
    if (typeof newInfo.isdogfriendly !== 'undefined')
      pet.isdogfriendly = newInfo.isdogfriendly
    if (typeof newInfo.iscatfriendly !== 'undefined')
      pet.iscatfriendly = newInfo.iscatfriendly
    if (typeof newInfo.sterilized !== 'undefined')
      pet.sterilized = newInfo.sterilized
    if (typeof newInfo.vaccines !== 'undefined')
      pet.vaccines = newInfo.vaccines
    if (typeof newInfo.payment !== 'undefined')
      pet.payment = newInfo.payment
    if (typeof newInfo.status !== 'undefined')
      pet.status = newInfo.status
    pet.save().then(updatedPet => {                                   //Guardando usuario modificado en MongoDB.
      res.status(201).json(updatedPet.publicData())
    }).catch(next)
  }).catch(next)
}

function deletePet(req, res) {

  Pet.findById(req.params.id).then(pet => {

    if (!pet) { return res.sendStatus(401); }
    
    let petName = pet.name;
    pet.deleteOne();
    res.status(200).send(`Mascota ${req.params.id} eliminada. ${petName}`);
    
    
  });
  
}

module.exports = {
  createPet,
  getPets,
  modifyPet,
  deletePet
}