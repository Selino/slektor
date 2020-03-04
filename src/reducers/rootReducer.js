// SEARCH_BY_TITLE
// SEARCH_BY_AUTHOR

// ADD_CHALLENGE
// REMOVE_CHALLENGE
// UPDATE_CHALLENGE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_TITLE
// SORT_BY_AUTHOR
// }

const initialState = {
  counter: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      const myName = action.name !== undefined ? action.name : "no name"
      return "searched " + myName
    case "ADD":
      return "added"
    default:
      return state
  }
}

export default rootReducer
