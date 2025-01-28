const express = require("express")
const server = express()

server.get("/hello", (req, res) => {
    return res.json({
        title: "hellow world",
        message: "200 - Sucesso"
    })
})

server.listen(3000)