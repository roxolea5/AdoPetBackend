const router = require('express').Router();

const {
    createQuestionary,
    getQuestionaries,
    modifyQuestionary,
    deleteQuestionary
} = require('../controllers/questionaries')
const auth = require('./auth');

router.post('/', createQuestionary)
router.get('/', auth.opcional, getQuestionaries)
router.get('/:id', auth.opcional, getQuestionaries);
router.put('/:id', auth.requerido, modifyQuestionary)
router.delete('/:id', auth.requerido, deleteQuestionary)

module.exports = router;