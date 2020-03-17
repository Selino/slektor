import { createStore, combineReducers } from "redux"
import challengesReducer from "../reducers/ChallengesReducer"
import booksReducer from "../reducers/BooksReducer"
import filtersReducer from "../reducers/FiltersReducer"

export default () => {
  const store = createStore(
    combineReducers({
      challenges: challengesReducer,
      books: booksReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
