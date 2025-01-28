const express = require("express")
const server = express()

server.get("/hello", (req, res) => {
    return res.json({
        title: "hellow world",
        message: "Sucesso"
    })
})

server.listen(3000)