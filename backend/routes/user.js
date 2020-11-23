//imports

const router = require('express').Router();
const ctrl = require('../controllers');

//'/user'
// routes

router.get('/', ctrl.user.index);
router.get('/:id', ctrl.user.show);
router.post('/', ctrl.user.create);

//exports
module.exports = router;