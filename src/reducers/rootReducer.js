import axios from "axios"

const myAxios = state => {
  axios
    .post(
      "https://www.googleapis.com/books/v1/volumes?q=road+less+traveled&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4",
      state
    )
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

const initialState = {
  counter: 0
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
    default:
      return { searchResult: state }
  }
}

export default rootReducer
