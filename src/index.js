import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import getSampleData from "./sampledata"
import { v4 as uuidv4 } from "uuid"

// UPDATE_CHALLENGE

// SEARCH_BOOKS
const searchBooks = ({ string = "" } = {}) => ({
  type: "SEARCH_BOOKS",
  searchBooks: {
    string
  }
})

// SET_TEXT_FILTER

// REMOVE_CHALLENGE
const removeChallenge = ({ id = "" } = {}) => ({
  type: "REMOVE_CHALLENGE",
  challenge: {
    id: id
  }
})

// CREATE_CHALLENGE generator
const createChallenge = ({
  bookID = "",
  amount = 0,
  createDate = 0,
  expirationDate = 0,
  reader = "",
  owner = "",
  id = ""
} = {}) => ({
  type: "CREATE_CHALLENGE",
  challenge: {
    id,
    owner,
    reader,
    bookID,
    amount,
    createDate,
    expirationDate
  }
})

// Challenges Reducer
const challengesReducerDefault = getSampleData.challenges
const challengesReducer = (state = challengesReducerDefault, action) => {
  switch (action.type) {
    case "CREATE_CHALLENGE":
      return [...state, action.challenge]
    case "REMOVE_CHALLENGE":
      return state.filter(({ id }) => id !== action.challenge.id)
    default:
      return state
  }
}

// Filters Reducer
const filtersReducerDefault = getSampleData.filters
const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// Books Reducer
const booksReducerDefault = getSampleData.items
const booksReducer = (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SEARCH_BOOKS":
      return action.searchBooks.string
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    challenges: challengesReducer,
    books: booksReducer,
    filters: filtersReducer,
    searchBooks: booksReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

Date.prototype.addDays = function(days) {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

const makeDate = () => {
  return new Date()
}

const makeExpirationDate = (days = 0) => {
  const date = new Date()
  return date.addDays(days)
}

const challengeOne = store.dispatch(
  createChallenge({
    id: uuidv4(),
    owner: "U-001",
    reader: "U-002",
    status: "running",
    bookID: uuidv4(),
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
    amount: 200,
    createDate: makeDate(),
    expirationDate: makeExpirationDate(30)
  })
)

const bookSearchOne = store.dispatch(
  searchBooks({
    string: "The Big Bible"
  })
)

store.dispatch(removeChallenge({ id: challengeOne.challenge.id }))

store.dispatch(searchBooks({ string: bookSearchOne.searchBooks.string }))

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
