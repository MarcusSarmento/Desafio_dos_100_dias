const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const data = {
        name: "Home",
        date: "31/10/24",
        profiles:[
            { name: "Zézin", city: "Juiz de Fora", profession: "Programador" },
            { name: "Joãozin", city: "Petrópolis" },
            { name: "Pedrin", city: "São Tomé das Letras", profession: "Médico" },
        ]
    }

    res.render('index', data);
})

module.exports = router;