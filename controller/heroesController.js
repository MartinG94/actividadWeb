const fs = require('fs');
const listadoHeroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroController = {
    listarHeroes: (req, res) => {
        res.send(listadoHeroes);
    },
    mostrarNombreYProfesion: (req, res) => {
        const numeroHeroe = req.params.idHeroe;
        const heroeBuscado = listadoHeroes.find( (unHeroe) => {
            return unHeroe.id == numeroHeroe;
        });
        if(heroeBuscado == undefined){
            res.send(`Heroe con el id: ${numeroHeroe} no encontrado`);
            return;
        };
        const respuesta = `​Hola, mi nombre es ${heroeBuscado.nombre} y soy ${heroeBuscado.profesion}.​`
        res.send(respuesta);
    },
};

module.exports = heroController;