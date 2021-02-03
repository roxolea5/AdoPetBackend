const router = require('express').Router();

const {
    createEvent,
    getEvents,
    modifyEvent,
    deleteEvent
} = require('../controllers/events')
const auth = require('./auth');

router.post('/', createEvent)
router.get('/', auth.opcional, getEvents)
router.get('/:id', auth.opcional, getEvents);
router.put('/:id', auth.requerido, modifyEvent)
router.delete('/:id', auth.requerido, deleteEvent)

module.exports = router;