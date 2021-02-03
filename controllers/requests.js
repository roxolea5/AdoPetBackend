const mongoose = require("mongoose");
const Request = mongoose.model('Request')
const Pet = mongoose.model('Pet')
mongoose.set('useFindAndModify', false);

function createRequest(req, res, next) { 
    const body = req.body
    const request = new Request(body)
    request.save().then(request => {
      res.status(201).send(request)      
    }).catch(next)  
}

function getRequests(req, res, next) {
  if(req.params.id){
    Request.findById(req.params.id, (err, request) => {
        if (!request || err) {
          return res.sendStatus(401)
        }
        return res.json(request.publicData());
      }).populate('user_adoptant_id', 'username first_name last_name photo')
      .populate('user_rescuer_id', 'username first_name last_name').catch(next);
  } else {
    Request.find().then(request=>{
      res.send(request)
    }).catch(next)
  }
}


function modifyRequest(req, res, next) {
  Request.findById(req.params.id).then(request => {
    if (!request) { return res.sendStatus(401); }
      let newInfo = req.body
      if (typeof newInfo.pet_id !== 'undefined')
        request.pet_id = newInfo.pet_id
      if (typeof newInfo.user_adoptant_id !== 'undefined')
      request.user_adoptant_id = newInfo.user_adoptant_id
      if (typeof newInfo.user_rescuer_id !== 'undefined')
      request.user_rescuer_id = newInfo.user_rescuer_id
      if (typeof newInfo.status !== 'undefined')
      request.status = newInfo.status
      request.save().then(updatedRequest => {
        res.status(201).json(updatedRequest.publicData())
      }).catch(next)    
  }).catch(next)
}

function deleteRequest(req, res) {

  Request.findById(req.params.id).then(request => {

    if (!request) { return res.sendStatus(401); }
    
    let requestAdoptant = request.user_adoptant_id;
    request.deleteOne();
    res.status(200).send(`Solicitud eliminada ${req.params.id} de. ${requestAdoptant}`);
    
    
  });
  
}

module.exports = {
  createRequest,
  getRequests,
  modifyRequest,
  deleteRequest
}