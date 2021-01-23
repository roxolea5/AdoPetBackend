var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoPet API');
});

router.use('/userAdmins', require('./userAdmins'));
router.use('/userRescuers', require('./userRescuers'));
router.use('/userAdoptants', require('./userAdoptants'));
router.use('/pets', require('./pets'));
/*router.use('/questionaries', require('./questionaries'));
router.use('/requests', require('./requests'));
router.use('/events', require('./events'));
router.use('/directories', require('./directories'));*/


module.exports = router;