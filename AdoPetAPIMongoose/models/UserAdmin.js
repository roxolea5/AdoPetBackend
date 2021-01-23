// UserAdmin.js
const mongoose = require('mongoose');                         //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator, pendiente de instalar.
const crypto = require('crypto');                             //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken');                          //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;                   

const UserAdminSchema = new mongoose.Schema({                   //Definiendo el objeto UsuarioSchema con el constructor Schema.
 username: {                                                  //Definiendo cada campo con sus tipo sde datos y validaciones.
   type: String,
   unique: true, //este campo no se puede repetir
   lowercase: true,
   required: [true, "no puede estar vacío"],
   match: [/^[a-zA-Z0-9]+$/, "es inválido"],
   index: true,
 },                                           
 first_name: { type: String, required: true },
 last_name: { type: String, required: true },
 email: {
   type: String,
   unique: true, //este campo no se puede repetir
   lowercase: true,
   required: [true, "no puede estar vacío"],
   match: [/\S+@\S+\.\S+/, "es inválido"],
   index: true,
 },
 date_of_birth: {
    type: Date,
    min: '1900-09-28',
    max: '2003-01-01',
    required: [true, "no puede estar vacío"],
  },
  phone: {
    type: String,
    required: true
  }, 
 status: { type: String, enum: ["activo", "inactivo"] },
 hash: String, //este campo se utilizará para la sesión
 salt: String, //este campo se utilizará para la sesión
},
{ timestamps: true }
); 

// usando plugin de validación para que no se repitan correos ni usernames
UserAdminSchema.plugin(uniqueValidator, { message: "Ya existe" });

UserAdminSchema.methods.crearPassword = function (password) {
this.salt = crypto.randomBytes(16).toString("hex"); // generando una "sal" random para cada usuario
this.hash = crypto
 .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
 .toString("hex"); // generando un hash utilizando la sal
};

/**
* Recibe el password, genera y compara el has con el de la base de datos
*/
UserAdminSchema.methods.validarPassword = function (password) {
const hash = crypto
 .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
 .toString("hex");
return this.hash === hash;
};

UserAdminSchema.methods.generarJWT = function() {
const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 60); // 60 días antes de expirar

return jwt.sign({
 id: this._id,
 username: this.username,
 exp: parseInt(exp.getTime() / 1000),
}, secret);
};

/**
* Devuelve la representación de un usuario después de autenticar
*/
UserAdminSchema.methods.toAuthJSON = function(){
return {
 username: this.username,
 email: this.email,
 token: this.generarJWT()
};
};

/**
* Devuelve la representación de un usuario, sólo datos públicos
*/
UserAdminSchema.methods.publicData = function(){
    return {
        id: this.id,
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        date_of_birth: this.date_of_birth,
        phone: this.phone,
        status: this.status,  
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
};
};

mongoose.model("UserAdmin", UserAdminSchema);    //Define el modelo UserAdmin, utilizando el esquema UserAdminSchema.