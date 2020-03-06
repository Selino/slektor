export const searchString = ({ string = "" } = {}) => ({
  type: "SEARCH_STRING",
  searchString: {
    string
  }
})
