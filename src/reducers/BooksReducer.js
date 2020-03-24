import { getSampleData } from "../sampledata"

const booksReducerDefault = getSampleData().items
export default (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SET_SEARCH_STRING":
      return { searchString: action.text }
    default:
      return state
  }
}
