

const express = require('express')
const app = express()

const port = process.env.API_PORT_D
const ping = process.env.API_PING_D

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/ping', (req, res) => res.send( ping ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
