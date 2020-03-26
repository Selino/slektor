import booksReducer from "./BooksReducer"

test("should setup default items", () => {
  const state = booksReducer(undefined, { type: "@@INIT" })
  expect(state).toHaveLength(5)
  expect(state[0]).toHaveProperty("id", "pD6arNyKyi8C")
  expect(state[4]).toHaveProperty("id", "N_0VhzQKIIAC")
})

test("should set search string", () => {
  const state = booksReducer(undefined, {
    type: "SET_SEARCH_STRING",
    searchString: "bubba"
  })
  expect(state).toMatchObject({
    searchString: "bubba"
  })
})
