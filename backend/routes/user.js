const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// router.get('/', auth, userCtrl.getMenuOptions);
// router.post('/signup', auth, userCtrl.signup);
// router.post('/login', auth, userCtrl.login);
// router.get('/:id', auth, userCtrl.getOneUser);
// router.put('/:id', auth, userCtrl.modifyUser);

router.post('/signup', userCtrl.signup);

module.exports = router;
