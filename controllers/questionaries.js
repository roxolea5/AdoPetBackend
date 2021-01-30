const mongoose = require('mongoose')
const Questionary = mongoose.model('Questionary')

function createQuestionary(req, res, next) {
  const body = req.body
  const questionary = new Questionary(body)
  questionary.save().then(questionary => {
    res.status(201).send(questionary)
  }).catch(next)
}


function getQuestionaries(req, res, next) {
  if(req.params.id){
    Questionary.findById(req.params.id, (err, questionary) => {
        if (!questionary || err) {
          return res.sendStatus(401)
        }
        return res.json(questionary.publicData());
      }).populate('user_adoptant_id', 'username first_name last_name photo')
      .populate('user_rescuer_id', 'username first_name last_name').catch(next);
  } else {
    Questionary.find().then(questionaries=>{
      res.send(questionaries)
    }).catch(next)
  }
}

function modifyQuestionary(req, res, next) {
  Questionary.findById(req.params.id).then(questionary => { //Find received pet
    if (!questionary) { return res.sendStatus(401); }
    let newInfo = req.body
    if (typeof newInfo.address !== 'undefined')
        questionary.address = newInfo.address
    if (typeof newInfo.pet_owner !== 'undefined')
        questionary.pet_owner = newInfo.pet_owner
    if (typeof newInfo.place_owner !== 'undefined')
        questionary.place_owner = newInfo.place_owner
    if (typeof newInfo.family_members !== 'undefined')
        questionary.family_members = newInfo.family_members
    if (typeof newInfo.family_agreement !== 'undefined')
        questionary.family_agreement = newInfo.family_agreement
    if (typeof newInfo.user_adoptant_id !== 'undefined')
        questionary.user_adoptant_id = newInfo.user_adoptant_id
    if (typeof newInfo.user_rescuer_id !== 'undefined')
        questionary.user_rescuer_id = newInfo.user_rescuer_id
    questionary.save().then(updatedQuestionary => {                                   //Guardando usuario modificado en MongoDB.
      res.status(201).json(updatedQuestionary.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteQuestionary(req, res) {

  Questionary.findById(req.params.id).then(questionary => {

    if (!questionary) { return res.sendStatus(401); }
    
    let questionaryAdoptant = questionary.user_adoptant_id;
    questionary.deleteOne();
    res.status(200).send(`Cuestionario eliminado ${req.params.id} de. ${questionaryAdoptant}`);
    
    
  });
  
}

module.exports = {
  createQuestionary,
  getQuestionaries,
  modifyQuestionary,
  deleteQuestionary
}