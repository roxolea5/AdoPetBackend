const router = require('express').Router();
const {
    createUserAdmin,
    getUserAdmins,
    modifyUserAdmin,
    deleteUserAdmin,
    startSession
} = require('../controllers/useradmins')
const auth = require('./auth');

router.post('/', createUserAdmin)
router.get('/:id', auth.requerido, getUserAdmins);
router.get('/', auth.requerido, getUserAdmins)
router.put('/:id', auth.requerido, modifyUserAdmin)
router.delete('/:id', auth.requerido, deleteUserAdmin)
router.post('/login', startSession)


module.exports = router;