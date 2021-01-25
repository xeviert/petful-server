const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const petRouter = express.Router()

petRouter
  .route('/')
  .get((req, res, next) => {
    // Return all pets currently up for adoption.
    let pets = Pets.get();
    return res.status(200).json(pets);
  })

petRouter
  .route('/:pet')
  .delete((req, res, next) => {
    // Remove a pet from adoption.
    let pet = req.params.pet;
    let newAdopter = {};
    try {
      newAdopter.pet = Pets.dequeue(pet);
      newAdopter.owner = People.dequeue();
    } catch (e) {
      return res.status(400).json(e.message);
    }

    return res.status(200).json(newAdopter);
  });

module.exports = petRouter;
