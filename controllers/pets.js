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
    Pet.findById(req.params.id)
			.populate('posted_by', 'username first_name Last_name photo').then(pets => {
	      res.send(pets)
	    }).catch(next)
  } else {
    Pet.find().then(pets=>{
      res.send(pets)
    }).catch(next)
  }
}

function getPet(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var pet1 = new Pet(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  res.send(pet1)
}

/*function modificarMascota(req, res) {
  // simulando un mascota previamente existente que el mascota utili
  var mascota1 = new Mascota(req.params.id, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}*/

function modifyPet(req, res, next) {
  console.log("Mascota a modificar: " + req.params.id ) //req.param.id - Mascota en uri

  Pet.findById(req.params.id).then(pet => { //Busca la mascota que se recibe como parámetro.

    if (!pet) { return res.sendStatus(401); }   //Si no se encuentra mascota, retorna estaus 401.---

    let idUsuario=req.usuario.id;                   //User en JWT
    console.log("Usuario que modifica " + idUsuario);
    let idAnunciante=pet.posted_by;
    console.log(" Anunciante mascota: " + idAnunciante);
    if( idUsuario == idAnunciante ){
      let nuevaInfo = req.body
      if (typeof nuevaInfo.name !== 'undefined')
        mascota.name = nuevaInfo.name
      if (typeof nuevaInfo.category !== 'undefined')
        mascota.category = nuevaInfo.category
      if (typeof nuevaInfo.specie !== 'undefined')
        mascota.specie = nuevaInfo.specie
      if (typeof nuevaInfo.sex !== 'undefined')
        mascota.sex = nuevaInfo.sex
      if (typeof nuevaInfo.vaccines !== 'undefined')
        mascota.vaccines = nuevaInfo.vaccines
      if (typeof nuevaInfo.payment !== 'undefined')
        mascota.payment = nuevaInfo.payment
      mascota.save().then(updatedMascota => {
        res.status(201).json(updatedMascota.publicData())
      }).catch(next)
    } 
    else{
      return res.sendStatus(401);
    }
  }).catch(next)
}

/*function eliminarMascota(req, res) {
    // Líneas que buscan un usaurio en la bd, una vez que lo encuenra lo elimina.
  res.status(200).send(`Mascota ${req.params.id} eliminado`);
}*/

function deletePet(req, res) {
  // únicamente borra a su propio mascota obteniendo el id del token
  Pet.findById(req.params.id).then(pet => {

    if (!pet) { return res.sendStatus(401); }
    
    let idUsuario=req.usuario.id;
    console.log("Usuario que modifica " + idUsuario);
    let idAnunciante=pet.posted_by;
    console.log(" Anunciante mascota: " + idAnunciante);

    if( idUsuario == idAnunciante ){
      let namePet = pet.name;
      pet.deleteOne();
      res.status(200).send(`Mascota ${req.params.id} eliminada. ${namePet}`);
    }else{
      return res.sendStatus(401);
    }
  });
  
  /*Mascota.findOneAndDelete({ _id: req.param.id }).then(r => {
      res.status(200).send(`Mascota ${req.params.id} eliminada: ${r}`);
  });*/
}


module.exports = {
  createPet,
  /*getPets,
  modifyPet,
  deletePet,
  getPet*/
}