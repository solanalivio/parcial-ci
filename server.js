const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Pipeline CI funcionando correctamente');
});

app.listen(3000, () => {
    console.log('Servidor funcionando en puerto 3000');
});