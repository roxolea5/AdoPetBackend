const router = require('express').Router();

const {
    createRequest,
    getRequests,
    modifyRequest,
    deleteRequest
} = require('../controllers/requests')
const auth = require('./auth');

router.post('/', createRequest)
router.get('/', auth.opcional, getRequests)
router.get('/:id', auth.opcional, getRequests);
router.put('/:id', auth.requerido, modifyRequest)
router.delete('/:id', auth.requerido, deleteRequest)

module.exports = router;