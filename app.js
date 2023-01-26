const express = require('express');

const app = express();

app.use(express.json());

app.get ('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas </h1>');
})

app.get('/json', (req, res) => {
    console.log(req.body);
    res.json({title: 'TarefaX', done: true})
})

app.listen(3000, () =>{
    console.log('Servidor iniciado');
})