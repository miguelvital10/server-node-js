const express = require("express")
const server = express()

server.get("/hello", (req, res) => {
    const nome = req.query.nome

    return res.json({
        title: 'hellow world',
        cliente: `${nome}`
    })
})

server.listen(3000)