import getSampleData from "../sampledata"

const filtersReducerDefault = getSampleData.filters
export default (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case "SORT_BOOKS_BY_TITLE":
      return { ...state, sortBooksBy: "title" }
    case "SORT_BOOKS_BY_AUTHOR":
      return { ...state, sortBooksBy: "author" }
    case "SORT_CHALLENGES_BY_DATE_CREATED":
      return { ...state, sortChallengesBy: "date-created" }
    case "SORT_CHALLENGES_BY_DATE_EXPIRING":
      return { ...state, sortChallengesBy: "date-expiring" }
    case "SORT_CHALLENGES_BY_DATE_SPECIFIED":
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}
