const express = require('express')
const gameRouter =  require('./src/router/game.router')

const app = express()
app.use(express.json())
app.use('/api/v1/game', gameRouter)


app.listen(8087, () => console.log("Server up on port 8087"))