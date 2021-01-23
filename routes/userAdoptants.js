const router = require('express').Router();
const {
    createUserAdoptant,
    getUserAdoptants,
    modifyUserAdoptant,
    deleteUserAdoptant,
    startSession
} = require('../controllers/useradoptants')
const auth = require('./auth');

router.post('/', createUserAdoptant)
router.get('/', auth.requerido, getUserAdoptants)
router.get('/:id', auth.requerido, getUserAdoptants);
router.put('/:id', auth.requerido, modifyUserAdoptant)
router.delete('/:id', auth.requerido, deleteUserAdoptant)
router.post('/login', startSession)


module.exports = router;