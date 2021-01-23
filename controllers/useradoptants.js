const mongoose = require("mongoose")
const UserAdoptant = mongoose.model("UserAdoptant")
const passport = require('passport');

function createUserAdoptant(req, res, next) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  const body = req.body,
    password = body.password

  delete body.password
  const userAdoptant = new UserAdoptant(body)
  userAdoptant.createPassword(password)
  userAdoptant.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

function getUserAdoptants(req, res, next) {                              //Obteniendo usuario desde MongoDB.
  if(req.params.id){
    UserAdoptant.findById(req.params.id, (err, user) => {
      if (!user || err) {
        return res.sendStatus(401)
      }
      return res.json(user.publicData());
    }).catch(next);
  } else {
    UserAdoptant.find().then(usuarios=>{
      usuarios = usuarios.map(u => u.publicData())
      res.send(usuarios)
    }).catch(next)
  }
}

function modifyUserAdoptant(req, res, next) {
  console.log(req.usuario)
  UserAdoptant.findById(req.usuario.id).then(user => {
    if (!user) { return res.sendStatus(401); }
    let newInfo = req.body
    if (typeof newInfo.username !== 'undefined')
      user.username = newInfo.username
    if (typeof newInfo.first_name !== 'undefined')
      user.first_name = newInfo.first_name
    if (typeof newInfo.last_name !== 'undefined')
      user.last_name = newInfo.last_name
    if (typeof newInfo.email !== 'undefined')
      user.email = newInfo.email
    if (typeof newInfo.password !== 'undefined')
      user.createPassword(newInfo.password)
    if (typeof newInfo.date_of_birth !== 'undefined')
      user.date_of_birth = newInfo.date_of_birth
    if (typeof newInfo.phone !== 'undefined')
      user.phone = newInfo.phone
    if (typeof newInfo.status !== 'undefined')
      user.status = newInfo.status    
    user.save().then(updatedUser => {                                   //Guardando usuario modificado en MongoDB.
      res.status(201).json(updatedUser.publicData())
    }).catch(next)
  }).catch(next)
}

function deleteUserAdoptant(req, res) {
  // únicamente borra a su propio usuario obteniendo el id del token
  UserAdoptant.findOneAndDelete({ _id: req.usuario.id }).then(r => {         //Buscando y eliminando usuario en MongoDB.
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
  createUserAdoptant,
  getUserAdoptants,
  modifyUserAdoptant,
  deleteUserAdoptant,
  startSession
}