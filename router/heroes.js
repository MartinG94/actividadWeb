const express = require('express');
const router = express.Router();
const controladorHeroes = require('../controller/heroesController');

router.get('/', controladorHeroes.listarHeroes);

module.exports = router;