const express = require('express')
const { CatService, DogService } = require('./pets.service')

const petRouter = express.Router()

petRouter
  .route('/cat')
  .get((req, res, next) => {
    let cats = CatService.get();
    if (!cats) {
      return res.status(400).json({
        error: 'None cats left'
      });
    }
    return res.status(200).json(cats);
  })
  .delete((req, res, next) => {
    const cats = CatService.adoptCat();
    if (!cats) {
      return res.status(400).json({
        error: 'None cats avail. Pick doggos',
      });
    }
    res.status(200).send(cats);
  });

petRouter
  .route('/dog')
  .get((req, res) => {
    const dogs = DogService.get();
    if (!dogs) {
      return res.status(400).json({
        error: 'None dogs left',
      });
    }
    return res.json(dogs);
  })
  .delete((req, res, next) => {
    const dogs = DogService.adoptDog();
    if (!dogs) {
      return res.status(400).json({
        error: 'None doggos, get cats'
      });
    }
    return res.status(200).send(dogs)
  });

module.exports = petRouter;
