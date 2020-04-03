import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import challengesReducer from "../reducers/ChallengesReducer"
import booksReducer from "../reducers/BooksReducer"
import filtersReducer from "../reducers/FiltersReducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      challenges: challengesReducer,
      books: booksReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
