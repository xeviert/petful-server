const Queue = require('../queue/Queue')
const { people } = require('../../store')

// Set up initial data.
// --------------------

const PeopleQ = new Queue()

people.forEach(person => {
  PeopleQ.enqueue(person);
})

// --------------------

const PeopleService = {
  get() {
    // Return all people in the queue.
    return PeopleQ.all();
  },

  enqueue(person) {
    // Add a person to the queue.
    people.enqueue(person);
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