const express = require ('express');

const router = express.Router();

router.get('/checkLists', (req,res) => {
    console.log('Olá')
    res.send();
})

router.post('/checkLists', (req,res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

router.get('/checkLists/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`Id: ${req.params.id}`);
})

router.put('/checkLists/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`Id: ${req.params.id}`);
})

module.exports = router;