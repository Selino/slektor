import { getSampleData } from "../sampledata"

const booksReducerDefault = getSampleData().items
export default (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SEND_BOOK_SEARCH":
      return action.books
    default:
      return state
  }
}
