/*eslint-disable*/
const express = require('express')
const json = require('body-parser').json()

const PeopleService = require('./people.service')

const peopleRouter = express.Router()

peopleRouter
  .route('/')  
  .get((req, res, next) => {
    res.json(PeopleService.get())
  })
  .post(json, (req, res, next) => {
    // Add a new person to the queue.
    const { name } = req.body;
    const person = name;

    if (!name) {
      return res.status(400).json({
        error: 'Name is missing'
      })
    }
    res.json(PeopleService.enqueue(person))
  })
  .delete((req, res, next) => {

    const people = PeopleService.dequeue();
    if (!people) {
      return res.status(400).json({
        error: 'None to delete'
      })
    }
    return res.json(people);
  })

module.exports = peopleRouter
