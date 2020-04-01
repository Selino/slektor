import { setSearchString } from "./booksactions"

test("should setup a search object with the passed string", () => {
  const action = SENDBOOKSEARCH("poop")
  expect(action).toEqual({
    type: "SEND_BOOK_SEARCH",
    searchString: "poop"
  })
})
