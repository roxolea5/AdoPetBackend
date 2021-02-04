const mongoose = require("mongoose");
const Event = mongoose.model('Event')
mongoose.set('useFindAndModify', false);

function createEvent(req, res, next) { 
    const body = req.body
    const event = new Event(body)
    event.save().then(event => {
      res.status(201).send(event)      
    }).catch(next)  
}

function getEvents(req, res, next) {
  if(req.params.id){
    Event.findById(req.params.id, (err, event) => {
        if (!event || err) {
          return res.sendStatus(401)
        }
        return res.json(event.publicData());
      }).populate('user_admin_id', 'username first_name last_name photo')
      .populate('user_rescuer_id', 'username first_name last_name').catch(next);
  } else {
    Event.find().then(event=>{
      res.send(event)
    }).catch(next)
  }
}


function modifyEvent(req, res, next) {
  Event.findById(req.params.id).then(event => {
    if (!event) { return res.sendStatus(401); }
      let newInfo = req.body
      if (typeof newInfo.photo !== 'undefined')
        event.photo = newInfo.photo
      if (typeof newInfo.name !== 'undefined')
        event.name = newInfo.name
      if (typeof newInfo.date !== 'undefined')
        event.date = newInfo.date
      if (typeof newInfo.place !== 'undefined')
        event.place = newInfo.place
    if (typeof newInfo.description !== 'undefined')
        event.description = newInfo.description
      event.save().then(updatedEvent => {
        res.status(201).json(updatedEvent.publicData())
      }).catch(next)    
  }).catch(next)
}

function deleteEvent(req, res) {
  Event.findById(req.params.id).then(event => {

    if (!event) { return res.sendStatus(401); }
    
    let eventName = event.name;
    event.deleteOne();
    res.status(200).send(`Evento eliminado ${req.params.id} . ${eventName}`);
    
    
  });
  
}

module.exports = {
  createEvent,
  getEvents,
  modifyEvent,
  deleteEvent
}