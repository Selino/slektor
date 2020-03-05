import getSampleData from "../sampledata"

const challengesReducerDefault = getSampleData.challenges
export default (state = challengesReducerDefault, action) => {
  switch (action.type) {
    case "CREATE_CHALLENGE":
      return [...state, action.challenge]
    case "UPDATE_CHALLENGE":
      return state.map(e => {
        if (e.id === action.challenge.id) {
          return {
            ...e,
            ...action.challenge.updates
          }
        } else {
          return e
        }
      })
    case "REMOVE_CHALLENGE":
      return state.filter(({ id }) => id !== action.challenge.id)
    default:
      return state
  }
}
