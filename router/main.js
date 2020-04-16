const express = require('express');
const router = express.Router();
const controladorMain = require('../controller/mainController');

router.get('/', controladorMain.home);

module.exports = router;