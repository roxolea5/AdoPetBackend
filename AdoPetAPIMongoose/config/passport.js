const passport = require('passport');                       //Importando passport, middleware para autenticación.
const LocalStrategy = require('passport-local').Strategy;   //Importando estrategia autenticación. --> passport-local
const mongoose = require('mongoose');
const UserAdmin = mongoose.model('UserAdmin');
const UserRescuer = mongoose.model('UserRescuer');
const UserAdoptant = mongoose.model('UserAdoptant');

passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    UserAdmin.findOne({ email: email }).then(function (userAdmin) {
    if (!userAdmin || !userAdmin.validatePassword(password)) {
        return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
        return done(null, userAdmin);
    }).catch(done);
}));

passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    UserRescuer.findOne({ email: email }).then(function (userRescuer) {
    if (!userRescuer || !userRescuer.validatePassword(password)) {
        return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
        return done(null, userRescuer);
    }).catch(done);
}));

passport.use(new LocalStrategy({                            //Configurando elementos utilizados para habilitar sesión.
    usernameField: 'email',
    passwordField: 'password'
}, function (email, password, done) {
    UserAdoptant.findOne({ email: email }).then(function (userAdoptant) {
    if (!userAdoptant || !userAdoptant.validatePassword(password)) {
        return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
        return done(null, userAdoptant);
    }).catch(done);
}));
