// reducer.js

module.exports = function reducer (state, action) {
  switch (action.type) {
    // action that increments a counter
    case 'INCREMENT': {
      // clone a fresh copy of our current state, as reducers never mutate existing state
      var newState = Object.assign({}, state)

      // increment the counter in state
      newState.counter = newState.counter + 1

      return newState
    }
    // action that increments a counter and adds a status message
    case 'INCREMENT_WITH_STATUS': {
      // clone a fresh copy of our current state, as reducers never mutate existing state
      var newState = Object.assign({}, state)

      // increment the counter in state
      newState.counter = newState.counter + 1

      // add a status message into the state
      newState.status = action.payload.status

      return newState
    }    
    default: {
      return state
    }
  }
}