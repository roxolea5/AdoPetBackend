const mongoose = require("mongoose")
const UserRescuer = mongoose.model("UserRescuer")
const passport = require('passport');

function createUserRescuer(req, res, next) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  const body = req.body,
    password = body.password

  delete body.password
  const userRescuer = new UserRescuer(body)
  userRescuer.createPassword(password)
  userRescuer.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

function getUserRescuers(req, res, next) {                              //Obteniendo usuario desde MongoDB.
  if(req.params.id){
    UserRescuer.findById(req.params.id, (err, user) => {
      if (!user || err) {
        return res.sendStatus(401)
      }
      return res.json(user.publicData());
    }).catch(next);
  } else {
    UserRescuer.find().then(usuarios=>{
      usuarios = usuarios.map(u => u.publicData())
      res.send(usuarios)
    }).catch(next)
  }
}

function modifyUserRescuer(req, res, next) {
  console.log(req.usuario)
  UserRescuer.findById(req.usuario.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.username !== 'undefined')
      user.username = nuevaInfo.username
    if (typeof nuevaInfo.first_name !== 'undefined')
      user.first_name = nuevaInfo.first_name
    if (typeof nuevaInfo.last_name !== 'undefined')
      user.last_name = nuevaInfo.last_name
    if (typeof nuevaInfo.email !== 'undefined')
      user.email = nuevaInfo.email
    if (typeof nuevaInfo.password !== 'undefined')
      user.createPassword(nuevaInfo.password)
    if (typeof nuevaInfo.date_of_birth !== 'undefined')
      user.date_of_birth = nuevaInfo.date_of_birth
    if (typeof nuevaInfo.phone !== 'undefined')
      user.phone = nuevaInfo.phone
    if (typeof nuevaInfo.photo !== 'undefined')
      user.photo = nuevaInfo.photo
    if (typeof nuevaInfo.address !== 'undefined')
      user.address = nuevaInfo.address
    if (typeof nuevaInfo.interview_date !== 'undefined')
      user.interview_date = nuevaInfo.interview_date
    if (typeof nuevaInfo.status !== 'undefined')
      user.status = nuevaInfo.status   
    user.save().then(updatedUser => {                                   //Guardando usuario modificado en MongoDB.
      res.status(201).json(updatedUser.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteUserRescuer(req, res) {
  // únicamente borra a su propio usuario obteniendo el id del token
  UserRescuer.findOneAndDelete({ _id: req.usuario.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
    res.status(200).send(`Usuario ${req.params.id} eliminado: ${r}`);
  })
}

function startSession(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = {
  createUserRescuer,
  getUserRescuers,
  modifyUserRescuer,
  deleteUserRescuer,
  startSession
}