const express = require('express');
const router = express.Router();
const controladorHeroes = require('../controller/heroesController');

router.get('/', controladorHeroes.listarHeroes);
router.get('/detalle/:idHeroe', controladorHeroes.listarHeroePorId);

module.exports = router;