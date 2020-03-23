import getSampleData from "../sampledata"
import { simulateSearch } from "../utilities/Utils"

const booksReducerDefault = getSampleData.items
export default (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SET_SEARCH_STRING":
      return { searchString: action.text }
    default:
      return state
  }
}
