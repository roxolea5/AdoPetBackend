const mongoose = require("mongoose");
const UserRescuer = mongoose.model('UserRescuer')
const UserAdoptant = mongoose.model('UserAdoptant')
const Request = mongoose.model('Request')
const Pet = mongoose.model('Pet')
mongoose.set('useFindAndModify', false);

function createRequest(req, res, next) { 
  // Buscamos la mascota a solicitar
  Pet.find(req.params.pet_id, async (err, pet) => {
    console.log(req.query.id)
    if (!pet || err) {
      console.log("entraif")
      return res.sendStatus(404)
    }
    console.log("sigue")
    if (pet.status==='adoptado') {
      console.log("entrastatus")
      return res.sendStatus('La mascota ya ha sido adoptada')
    }
  }).catch(next)
    console.log("continua")
    const body = req.body
    const request = new Request(body)
    request.save().then(request => {
      console.log("entra1")
      res.status(201).send(request)
      
    }).catch(next)
  
}

/*

function getRequest(req, res, next) {
  if (!req.params.id) {
    // sin :id, solo enlistaremos las solicitudes dónde el usuario es anunciante o solicitante
    Request.find({ $or: [{ required_by: req.usuario.id }, { followed_by: req.usuario.id }] }).then(requests => {
      res.send(requests)
    }).catch(next)
  } else {
    // Al obtener una solicitud individual con el :id poblaremos los campos necesarios
    Request.findOne({ _id: req.params.id, $or: [{ required_by: req.usuario.id }, { followed_by: req.usuario.id }] })
      .then(async (request) => {
        // añadimos información sobre la mascota
        await request.populate('pet').execPopulate()
        if (request.status === 'closed') {
          // Si la solicitud ha sido aceptada, se mostrará la información de contacto
          await request.populate('followed_by', 'username first_name last_name phone email').execPopulate()
          await request.populate('required_by', 'username first_name last_name phone email').execPopulate()
          res.send(solicitud)
        } else {
          res.send(solicitud)
        }
      }).catch(next)
  }
}


function modifyRequest(req, res, next) {
  console.log("Solicitud a buscar: " + req.params.id )  

  Request.findById(req.params.id).then(request => {
    if (!request) { return res.sendStatus(401); }

    console.log("Usuario solicita cambio solicitud: " + req.usuario.id);
    console.log("Usuario anunciante mascota: " + request.followed_by);

    if( req.usuario.id == request.followed_by){
      let nuevaInfo = req.body
      if (typeof nuevaInfo.pet_id !== 'undefined')
        request.pet_id = nuevaInfo.pet_id
      if (typeof nuevaInfo.fechaDeCreacion !== 'undefined')
      request.fechaDeCreacion = nuevaInfo.fechaDeCreacion
      if (typeof nuevaInfo.followed_by !== 'undefined')
      request.followed_by = nuevaInfo.followed_by
      if (typeof nuevaInfo.required_by !== 'undefined')
      request.required_by = nuevaInfo.required_by
      if (typeof nuevaInfo.status !== 'undefined')
      request.status = nuevaInfo.status
      request.save().then(updateSolicitud => {
        res.status(201).json(updateRequest.publicData())
      }).catch(next)
    }else{
      return res.sendStatus(401);
    }
  }).catch(next)
}


function eliminarSolicitud(req, res) {
    // Líneas que buscan una solicitud en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Solicitud ${req.params.id} eliminado`);
}*/

module.exports = {
  createRequest,
  /*getRequest,
  modifyRequest,
  //eliminarSolicitud,
  obtenerSolicitud*/
}