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
    const { name } = req.body;
    const data = name;

    if (!name) {
      return res.status(400).json({
        error: 'Name is missing'
      })
    }
    res.status(200).json(PeopleService.enqueue(data))
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
