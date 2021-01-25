const Queue = require('../queue/Queue');
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

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let firstPets = {
      cat : CatQ.show(),
      dog : DogQ.show()
    };

    if (!firstPets.cat) {
      cats.forEach(el => {
        CatQ.enqueue(el);
      });
      firstPets.cat = CatQ.show();
    }

    if (!firstPets.dog) {
      dogs.forEach(el => {
        DogQ.enqueue(el);
      });
      firstPets.dog = DogQ.show();
    }
    return firstPets;
  },

  dequeue(pet) {
    // Remove a pet from the queue.
    let toAdopt = pet === 'cat'
      ? CatQ : DogQ;
    return toAdopt.dequeue();
  }
}
