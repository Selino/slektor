import getSampleData from "../sampledata"
import { simulateSearch } from "../utilities/Utils"

const booksReducerDefault = getSampleData.items
export default (state = booksReducerDefault, action) => {
  switch (action.type) {
    case "SEARCH_STRING":
      return simulateSearch(action.searchString.string)
    default:
      return state
  }
}
