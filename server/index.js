// Ici on charge express afin de pouvoir s'enservir ds notre application
const express = require('express');

//Ici on met express ds 1 constante app
const app = express();

app.post('/api/save', (req, res) => {
    res.send('Votre film a bien été ajouté à vos favoris! 🚀');
    console.log("il est arrivé");
});

app.listen(5000, () => console.log("Le server est lancé sur le port 5000"));