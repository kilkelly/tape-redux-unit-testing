// testValueInState.js

var tape = require('tape')
var redux = require('redux')
var reducer = require('./reducer')

// ---------------------------------------------------

// Tape test starts here...
tape('Increment counter', function (test) {
  // the initial state that will be passed to our store
  var initialState = { counter: 0 }

  // action which will increment the counter in our store
  var incrementAction = { type: 'INCREMENT' }

  // create the Redux store
  var store = redux.createStore(reducer, initialState)

  // send the appropriate action to the store
  store.dispatch(incrementAction)

  // get the updated value of the counter in the store
  var actual = store.getState().counter

  // expected value of the counter
  var expected = 1

  // message to display if the expected value is not there
  // i.e. the test fails
  var message = 'Counter should have incremented'

  // Tape asserts whether the actual and expected values are equal
  // and displays the message if they are not equal
  test.equal(actual, expected, message)

  // call this to let Tape know that this particular test is finished
  test.end()
})
