import { setSearchString } from "./booksactions"

test("should setup a search object with the passed string", () => {
  const action = setSearchString("poop")
  expect(action).toEqual({
    type: "SET_SEARCH_STRING",
    searchString: "poop"
  })
})
