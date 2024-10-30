const express = require('express');
const router = express.Router();

let user = null;

const profiles = [
    { name: "Zézin", city: "Juiz de Fora", profession: "Programador" },
    { name: "Joãozin", city: "Petrópolis" },
    { name: "Pedrin", city: "São Tomé das Letras", profession: "Médico" },
];

router.get('/', (req, res, next) => {
    const data = {
        name: "Home",
        date: req.timeStamp,
        profiles: profiles,
        user: user
    }

    res.render('index', data);
})

router.get('/login', (req,res,next) => {
    res.render('login', null)
})

router.get("/error", (req, res, next) => {
    const data = {
        message: 'Erro ao logar! Por favor, confira seu login e senha...'
    }


    res.render("error", data);

})

router.post('/join', (req, res, next) => {
    const body = req.body;
    profiles.push(body);

    res.redirect('/');
});

router.post('/login', (req,res,next) =>{
    const username = req.body.username;
    const password = req.body.password;

    if(password === "123"){
        user = {username: username}
        res.redirect('/')
        return
    }else{
        res.redirect('/error');
    }

    //Caso o login falhe
    res.json({
        data: "Falha no login"
    })
});


module.exports = router;