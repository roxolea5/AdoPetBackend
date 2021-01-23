const router = require('express').Router();
const {
    createPet,
    /*getUserAdoptants,
    modifyUserAdoptant,
    deleteUserAdoptant,
    startSession*/
} = require('../controllers/pets')
const auth = require('./auth');

router.post('/', createPet)
/*router.get('/', auth.requerido, getUserAdoptants)
router.get('/:id', auth.requerido, getUserAdoptants);
router.put('/:id', auth.requerido, modifyUserAdoptant)
router.delete('/:id', auth.requerido, deleteUserAdoptant)
router.post('/login', startSession)*/


module.exports = router;