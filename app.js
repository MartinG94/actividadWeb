const express = require('express');
const fs = require('fs');
const app = express();
const port = 3030;
const rutaMain = require('./router/main');
const rutaHeroes = require('./router/heroes');

app.listen(port, () => console.log(`Server running in ${port} port`));
app.use('/', rutaMain);
app.use('/heroes', rutaHeroes);

// // Ruta... ¿Pára qué sirve esto?
// app.get('*', (req, res) => {
// 	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
// });