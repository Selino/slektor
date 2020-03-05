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
    })
  )
  return store
}
