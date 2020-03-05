import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import getSampleData, { simulatedSearchData } from "./sampledata"
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

const sortChallengesByDateCreated = () => ({
  type: "SORT_CHALLENGES_BY_DATE_CREATED"
})

const sortChallengesByDateExpiring = () => ({
  type: "SORT_CHALLENGES_BY_DATE_EXPIRING"
})

const sortChallengesByAmount = () => ({
  type: "SORT_CHALLENEGES_BY_AMOUNT"
})

const sortChallengesByDateSpecified = date => ({
  type: "SORT_CHALLENGES_BY_DATE_SPECIFIED",
  sortChallengesByDateSpecified: date
})

const createChallenge = ({
  id = "",
  bookID = "",
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
    amount,
    createDate,
    expirationDate
  }
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

const filtersReducerDefault = getSampleData.filters
const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case "SORT_BOOKS_BY_TITLE":
      return { ...state, sortBooksBy: "title" }
    case "SORT_BOOKS_BY_AUTHOR":
      return { ...state, sortBooksBy: "author" }
    case "SORT_CHALLENGES_BY_DATE_CREATED":
      return { ...state, sortChallengesBy: "date-created" }
    case "SORT_CHALLENGES_BY_DATE_EXPIRING":
      return { ...state, sortChallengesBy: "date-expiring" }
    case "SORT_CHALLENGES_BY_DATE_SPECIFIED":
      return {
        ...state,
        ...action
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

// ------- init store & subscribe
const store = createStore(
  combineReducers({
    challenges: challengesReducer,
    books: booksReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

// ------- dispatch calls
// const challengeOne = store.dispatch(
//   createChallenge({
//     id: uuidv4(),
//     owner: "U-001",
//     reader: "U-002",
//     status: "running",
//     bookID: uuidv4(),
//     amount: 700,
//     createDate: makeDate(),
//     expirationDate: makeExpirationDate(30)
//   })
// )

// const challengeTwo = store.dispatch(
//   createChallenge({
//     id: uuidv4(),
//     owner: "U-002",
//     reader: "U-002",
//     status: "running",
//     bookID: uuidv4(),
//     amount: 200,
//     createDate: makeDate(),
//     expirationDate: makeExpirationDate(30)
//   })
// )

// store.dispatch(removeChallenge({ id: challengeOne.challenge.id }))

// store.dispatch(
//   searchString({
//     string: "The Hobbit"
//   })
// )

// store.dispatch(updateChallenge(challengeTwo.challenge.id, { amount: 600 }))

// store.dispatch(sortBooksByTitle())

store.dispatch(sortBooksByAuthor())

store.dispatch(sortChallengesByDateSpecified(123))

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
