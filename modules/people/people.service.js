const { Queue, displayQ } = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

const PeopleService = {
  get() {
    // Return all people in the queue.
    const showPeeps = displayQ(people);
    return showPeeps;
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
    return people;
  },

  dequeue() {
    // Remove a person from the queue.
    return people.dequeue();
  },
  show() {
    return people.show();
  }
  

}

module.exports = PeopleService;