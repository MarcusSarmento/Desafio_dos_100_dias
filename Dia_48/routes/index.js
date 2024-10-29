const express = require('express');
const router = express.Router();

const profiles = [
    { name: "Zézin", city: "Juiz de Fora", profession: "Programador" },
    { name: "Joãozin", city: "Petrópolis" },
    { name: "Pedrin", city: "São Tomé das Letras", profession: "Médico" },
];

router.get('/', (req, res, next) => {
    const data = {
        name: "Home",
        date: "31/10/24",
        profiles: profiles,
    }

    res.render('index', data);
})

router.post('/join', (req, res, next) => {
    const body = req.body;
    profiles.push(body);

    res.redirect('/');
})
module.exports = router;