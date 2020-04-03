import { getSampleData } from "../sampledata"

const booksReducerDefault = getSampleData().items
export default (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return action.books
    default:
      return state
  }
}
