const mongoose = require("mongoose")
const UserAdoptant = mongoose.model("UserAdoptant")
const passport = require('passport');

function createUserAdoptant(req, res, next) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  const body = req.body,
    password = body.password

  delete body.password
  const usuario = new UserAdoptant(body)
  usuario.crearPassword(password)
  usuario.save().then(user => {                                         //Guardando nuevo usuario en MongoDB.
    return res.status(201).json(user.toAuthJSON())
  }).catch(next)
}

function getUserAdoptant(req, res, next) {                              //Obteniendo usuario desde MongoDB.
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
    let nuevaInfo = req.body
    if (typeof nuevaInfo.username !== 'undefined')
      user.username = nuevaInfo.username
    if (typeof nuevaInfo.first_name !== 'undefined')
      user.first_name = nuevaInfo.first_name
    if (typeof nuevaInfo.last_name !== 'undefined')
      user.last_name = nuevaInfo.last_name
    if (typeof nuevaInfo.email !== 'undefined')
      user.email = nuevaInfo.email
    if (typeof nuevaInfo.phone !== 'undefined')
      user.phone = nuevaInfo.phone
    if (typeof nuevaInfo.status !== 'undefined')
      user.status = nuevaInfo.status
    if (typeof nuevaInfo.password !== 'undefined')
      user.crearPassword(nuevaInfo.password)
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

function iniciarSesion(req, res, next) {
  if (!req.body.email) {
    return res.status(422).json({ errors: { email: "no puede estar vacío" } });
  }

  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "no puede estar vacío" } });
  }

  passport.authenticate('local', { session: false }, function (err, user, info) {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generarJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = {
    createUserAdoptant,
    getUserAdoptant,
    modifyUserAdoptant,
    deleteUserAdoptant,
  iniciarSesion
}