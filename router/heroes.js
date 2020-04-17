const express = require('express');
const router = express.Router();
const controladorHeroes = require('../controller/heroesController');

router.get('/heroes', controladorHeroes.listarHeroes);

module.exports = router;