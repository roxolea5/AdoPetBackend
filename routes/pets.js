const router = require('express').Router();
const {
    createPet,
    getPets,
    modifyPet,
    deletePet
} = require('../controllers/pets')
const auth = require('./auth');

router.post('/', createPet)
router.get('/', auth.opcional, getPets)
router.get('/:id', auth.opcional, getPets);
router.put('/:id', auth.requerido, modifyPet)
router.delete('/:id', auth.requerido, deletePet)

module.exports = router;