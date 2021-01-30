const router = require('express').Router();

const {
    createRequest,
    /*getQuestionaries,
    modifyQuestionary,
    deleteQuestionary*/
} = require('../controllers/requests')
const auth = require('./auth');

router.post('/', createRequest)
/*router.get('/', auth.opcional, getQuestionaries)
router.get('/:id', auth.opcional, getQuestionaries);
router.put('/:id', auth.requerido, modifyQuestionary)
router.delete('/:id', auth.requerido, deleteQuestionary)*/

module.exports = router;