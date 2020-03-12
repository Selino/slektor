import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
// import { setTextFilter } from "./actions/FiltersActions"
import { createChallenge } from "./actions/ChallengesActions"
import { v4 as uuidv4 } from "uuid"
import "moment-timezone"
import AppRouter from "./routers/AppRouter"

const store = configureStore()

// setTimeout(() => {
//   store.dispatch(setTextFilter("poo"))
// }, 3000)

store.dispatch(
  createChallenge({
    id: "4",
    owner: "Lenny Kravitz",
    reader: "Butt McJones",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "The Road",
    bookThumbnail:
      "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 200,
    startDate: 1583961742,
    endDate: 1586640142
  })
)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
