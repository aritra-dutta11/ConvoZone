const express = require('express')
const colors = require('colors')
const { chats } = require('./data/data')

const app = express()

app.get('/', (req, res) => {
    res.send('API IS RUNNING')
})

app.get('/api/chats', (req, res) => {
    res.send(chats)
})

app.get('/api/chats/:id', (req, res) => {
    // console.log(req);
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
})

app.listen(8000, console.log("Backend running on 8000".bgMagenta.black))