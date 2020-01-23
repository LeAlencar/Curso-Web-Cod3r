const express = require('express')

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send('Parabéns. Usuário Incluido')
})

app.post('/usuarios/:id', (req, res) => { //:id pra pegar o id
    console.log(req.body)
    console.log(req.params.id)
    res.send('Parabéns. Usuário Alterado')
})

app.listen(9090)

