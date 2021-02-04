const mongoose = require("mongoose");
const Directory = mongoose.model('Directory')
mongoose.set('useFindAndModify', false);

function createDirectory(req, res, next) { 
    const body = req.body
    const directory = new Directory(body)
    directory.save().then(directory => {
      res.status(201).send(directory)      
    }).catch(next)  
}

function getDirectories(req, res, next) {
  if(req.params.id){
    Directory.findById(req.params.id, (err, directory) => {
        if (!directory || err) {
          return res.sendStatus(401)
        }
        return res.json(directory.publicData());
      }).populate('published_by_1', 'username first_name last_name')
      .populate('published_by_2', 'username first_name last_name').catch(next);
  } else {
    Directory.find().then(directory=>{
      res.send(directory)
    }).catch(next)
  }
}


function modifyDirectory(req, res, next) {
  Directory.findById(req.params.id).then(directory => {
    if (!directory) { return res.sendStatus(401); }
      let newInfo = req.body
      if (typeof newInfo.photo !== 'undefined')
        directory.photo = newInfo.photo
      if (typeof newInfo.type !== 'undefined')
        directory.type = newInfo.type
      if (typeof newInfo.representative !== 'undefined')
        directory.representative = newInfo.representative
      if (typeof newInfo.address !== 'undefined')
        directory.address = newInfo.address
      if (typeof newInfo.phone !== 'undefined')
        directory.phone = newInfo.phone
      if (typeof newInfo.days !== 'undefined')
        directory.days = newInfo.days
      if (typeof newInfo.hour !== 'undefined')
        directory.hour = newInfo.hour
      directory.save().then(updatedDirectory => {
        res.status(201).json(updatedDirectory.publicData())
      }).catch(next)    
  }).catch(next)
}

function deleteDirectory(req, res) {
  Directory.findById(req.params.id).then(directory => {

    if (!directory) { return res.sendStatus(401); }
    
    let representative = directory.representative;
    directory.deleteOne();
    res.status(200).send(`Registro eliminado ${req.params.id} . ${representative}`);
    
    
  });
  
}

module.exports = {
  createDirectory,
  getDirectories,
  modifyDirectory,
  deleteDirectory
}