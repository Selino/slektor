import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import { v4 as uuidv4 } from "uuid"
import { createChallenge } from "./actions/ChallengesActions"

const store = configureStore()

// put test dispatches here
store.dispatch(
  createChallenge({
    id: uuidv4(),
    owner: "U-002",
    reader: "U-002",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "The Road",
    amount: 200,
    startDate: 1583877052,
    endDate: 1584481852
  })
)

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
