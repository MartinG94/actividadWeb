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
    mostrarBiografia: (req, res) => {
        const numeroHeroe = req.params.idHeroe;
        const parametroOK = req.params.ok;
        const heroeBuscado = listadoHeroes.find( (unHeroe) => {
            return unHeroe.id == numeroHeroe;
        });
        if( heroeBuscado == undefined ){
            res.send(`​"No encontramos un héroe con el id ${numeroHeroe} para mostrarte su biografía"​.`)
            return;
        };
        if( parametroOK == undefined || parametroOK != 'ok' ){
            res.send(`${heroeBuscado.nombre}. ​Lamento que no desees saber más de mi :(.`);
            return;
        };
        if( parametroOK == 'ok' ){
            res.send(`${heroeBuscado.nombre}. ${heroeBuscado.resenia}`);
        };
    }
};

module.exports = heroController;