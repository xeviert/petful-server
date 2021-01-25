const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config')
const petRouter = require('../pets/pets.router')
const peopleRouter = require('../people/people.router')

const app = express()

app.use(cors({
    origin: CLIENT_ORIGIN
}))

app.get('/', (req, res) => {
        res.status(200).send('Petful server is live!')
})

app.use('/api/people', peopleRouter)
app.use('/api/pets', petRouter)

module.exports = app
