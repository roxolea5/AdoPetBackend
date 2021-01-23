const router = require('express').Router();
const {
    createUserRescuer,
    getUserRescuers,
    modifyUserRescuer,
    deleteUserRescuer,
    startSession
} = require('../controllers/userrescuers')
const auth = require('./auth');

router.post('/', createUserRescuer)
router.get('/', auth.requerido, getUserRescuers)
router.get('/:id', auth.requerido, getUserRescuers);
router.put('/:id', auth.requerido, modifyUserRescuer)
router.delete('/:id', auth.requerido, deleteUserRescuer)
router.post('/login', startSession)


module.exports = router;