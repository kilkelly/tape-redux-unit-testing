// testEntireState.js

var tape = require('tape')
var redux = require('redux')
var reducer = require('./reducer')

// ---------------------------------------------------

// Tape test starts here...
tape('Increment counter along with a status message', function (test) {
  // the initial state that will be passed to our store
  var initialState = {
    counter: 0,
    status: 'The counter has never been incremented'
  }

  // action which will increment the counter in our store
  var incrementWithStatusAction = { 
    type: 'INCREMENT_WITH_STATUS',
    payload: {
      status: 'Counter has been incremented'
    }
  }

  // create the Redux store
  var store = redux.createStore(reducer, initialState)

  // send the appropriate action to the store
  store.dispatch(incrementWithStatusAction)

  // get the updated state in the store
  var actual = store.getState()

  // expected value of the state
  var expected = {
    counter: 1,
    status: 'Counter has been incremented'
  }

  // message to display if the expected value is not there
  // i.e. the test fails
  var message = 'Counter should have incremented along with a status message'

  // Tape asserts whether the actual and expected values are equal
  // and displays the message if they are not equal
  test.deepEqual(actual, expected, message)

  // call this to let Tape know that this particular test is finished
  test.end()
})
