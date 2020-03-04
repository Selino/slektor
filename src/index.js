import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import getSampleData from "./sampledata"
import { v4 as uuid } from "uuid"

// CREATE_CHALLENGE
const createChallenge = ({} = {}) => ({
  type: "CREATE_CHALLENGE",
  challenge: {
    id: uuid(),
    owner: "U1",
    reader: "U2",
    status: "running",
    bookID: "xIItr7-StUEC",
    amount: 300,
    createDate: "2020-02-18T19:01:55.687+00:00",
    expirationDate: "2020-03-03T00:21:48+0000"
  }
})

// REMOVE_CHALLENGE
// UPDATE_CHALLENGE

// SEARCH_BOOKS

// SET_TEXT_FILTER

// Challenges Reducer
const challengesReducerDefault = getSampleData.challenges
const challengesReducer = (state = challengesReducerDefault, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    challenges: challengesReducer,
    books: booksReducer,
    filters: filtersReducer
  })
)

// store.subscribe(() => {
console.log(store.getState())
// })

// store.dispatch({
//   type: "SEARCH",
//   name: "Lorem ipsum"
// })

// store.dispatch({
//   type: "ADD"
// })

// store.dispatch({
//   type: "SEARCH"
// })

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
