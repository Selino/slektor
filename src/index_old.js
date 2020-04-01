import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import { getSampleData, simulatedSearchData } from "./sampledata"
import { v4 as uuidv4 } from "uuid"

// ------- action generators
const sortBooksByAuthor = () => ({
  type: "SORT_BOOKS_BY_AUTHOR"
})

const sortBooksByTitle = () => ({
  type: "SORT_BOOKS_BY_TITLE"
})

const searchString = ({ string = "" } = {}) => ({
  type: "SEARCH_STRING",
  searchString: {
    string
  }
})

const createChallenge = ({
  id = "",
  bookID = "",
  bookTitle = "",
  amount = 0,
  createDate = 0,
  expirationDate = 0,
  reader = "",
  owner = ""
} = {}) => ({
  type: "CREATE_CHALLENGE",
  challenge: {
    id,
    owner,
    reader,
    bookID,
    bookTitle,
    amount,
    createDate,
    expirationDate
  }
})

const removeChallenge = ({ id } = {}) => ({
  type: "REMOVE_CHALLENGE",
  challenge: {
    id: id
  }
})

const updateChallenge = (id, updates) => ({
  type: "UPDATE_CHALLENGE",
  challenge: {
    id: id,
    updates
  }
})

// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
})

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
})

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
})

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
})

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
})

// ------- reducers
const challengesReducerDefault = getSampleData.challenges
const challengesReducer = (state = challengesReducerDefault, action) => {
  switch (action.type) {
    case "CREATE_CHALLENGE":
      return [...state, action.challenge]
    case "UPDATE_CHALLENGE":
      return state.map(e => {
        if (e.id === action.challenge.id) {
          return {
            ...e,
            ...action.challenge.updates
          }
        } else {
          return e
        }
      })
    case "REMOVE_CHALLENGE":
      return state.filter(({ id }) => id !== action.challenge.id)
    default:
      return state
  }
}

// Filters Reducer
const filtersReducerDefaultState = getSampleData.filters
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      }
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

const booksReducerDefault = getSampleData.items
const booksReducer = (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SEARCH_STRING":
      return simulateSearch(action.searchString.string)
    default:
      return state
  }
}

// -------- utilities

function simulateSearch(string) {
  return simulatedSearchData.items
}

const makeDate = () => {
  return new Date().getTime()
}

const makeExpirationDate = days => {
  return days * 24 * 60 * 60 * 1000
}

const getVisibleChallenges = (
  challenges,
  { bookTitle, createDate, expirationDate }
) => {
  // return challenges
  return challenges.filter(challenges => {
    const createDateMatch = false
    const expirationDateMatch = false
    const textMatch = false

    return createDateMatch && expirationDateMatch && textMatch
  })
}

// ------- init store & subscribe
const store = createStore(
  combineReducers({
    challenges: challengesReducer,
    books: booksReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleChallenges = getVisibleChallenges(
    state.challenges,
    state.filters
  )
  console.log(visibleChallenges)
})

// ------- dispatch calls
const challengeOne = store.dispatch(
  createChallenge({
    id: uuidv4(),
    owner: "U-001",
    reader: "U-002",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "Random Name",
    amount: 700,
    createDate: makeDate(),
    expirationDate: makeExpirationDate(30)
  })
)

const challengeTwo = store.dispatch(
  createChallenge({
    id: uuidv4(),
    owner: "U-002",
    reader: "U-002",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "The Road",
    amount: 200,
    createDate: makeDate(),
    expirationDate: makeExpirationDate(30)
  })
)

// store.dispatch(removeChallenge({ id: challengeOne.challenge.id }))

// store.dispatch(
//   searchString({
//     string: "The Hobbit"
//   })
// )

// store.dispatch(updateChallenge(challengeTwo.challenge.id, { amount: 600 }))

// store.dispatch(sortBooksByTitle())

// store.dispatch(sortBooksByAuthor())

// store.dispatch(sortChallengesByDate())

store.dispatch(setTextFilter("Jane"))

// -------

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
