const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const { NODE_ENV } = require('../../config');


const petRouter = require('../pets/pets.router')
const peopleRouter = require('../people/people.router')

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

const app = express()

app.use(morgan(morganOption));
app.use(cors())

app.get('/', (req, res) => {
        res.status(200).send('Petful server is live!')
})

app.use('/api/people', peopleRouter)
app.use('/api/', petRouter)

module.exports = app
