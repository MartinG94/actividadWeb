const fs = require('fs');
const listadoHeroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroController = {
    listarHeroes: (req, res) => {
        res.send(listadoHeroes);
    },
    listarHeroePorId: (req, res) => {
        let numeroHeroe = req.params.idHeroe;
        let heroeBuscado = listadoHeroes.find( (unHeroe) => {
            return unHeroe.id == numeroHeroe;
        });
        if(heroeBuscado == undefined){
            res.send(`Heroe no encontrado`);
            return;
        };
        let respuesta = `​Hola, mi nombre es ${heroeBuscado.nombre} y soy ${heroeBuscado.profesion}.​`
        res.send(respuesta);
    },
};

module.exports = heroController;