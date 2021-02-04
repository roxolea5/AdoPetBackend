const router = require('express').Router();

const {
    createDirectory,
    getDirectories,
    modifyDirectory,
    deleteDirectory
} = require('../controllers/directories')
const auth = require('./auth');

router.post('/', createDirectory)
router.get('/', auth.opcional, getDirectories)
router.get('/:id', auth.opcional, getDirectories);
router.put('/:id', auth.requerido, modifyDirectory)
router.delete('/:id', auth.requerido, deleteDirectory)

module.exports = router;