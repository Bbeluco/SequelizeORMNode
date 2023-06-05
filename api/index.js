const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: 'Bem vindo à API' })
})

app.listen(port, () => console.log(`Servidor escutando na porta ${port}`))