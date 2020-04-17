const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroController = {
    listarHeroes: (req, res) => {
        res.send(losHeroes);
    },
};

module.exports = heroController;