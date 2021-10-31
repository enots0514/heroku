const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/userCtrl');

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/register', (req, res) => {
    res.render("register");
});
router.post('/register', userCtrl.usercheck, userCtrl.usersave);

module.exports = router;