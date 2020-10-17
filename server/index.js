require('dotenv').config({ path: __dirname + "/../.env" })
const {SERVER_PORT, CONNECTION_STRING} = process.env
const express = require('express')
const massive = require('massive')
const news = require('./controllers/newsCtrl')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.get('/api/news', news.getNews)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} listening`))