const { Queue, displayQ } = require('../queue/Queue');
const { cats, dogs } = require('../../store');

// Set up initial data.
// --------------------

const DogQ = new Queue();
const CatQ = new Queue();

cats.forEach(el => {
  CatQ.enqueue(el);
});
dogs.forEach(el => {
  DogQ.enqueue(el);
});
// --------------------

const CatService = {
  get() {
    let showCats = displayQ(CatQ);
    return showCats;
  },
  getFirst() {
    return CatQ.show();
  },
  adoptCat() {
    CatQ.dequeue();
    return CatQ;
  }
};

const DogService = {
  get() {
    let showDogs = displayQ(DogQ);
    return showDogs;
  },
  getFirst() {
    return DogQ.show();
  },
  adoptDog() {
    DogQ.dequeue;
    return DogQ;
  }
};

module.exports = {
  CatService,
  DogService,
};
