import { simulateSearch, getVisibleItems } from "../../utilities/Utils"

test("should return sample data with a book list", () => {
  const action = simulateSearch().items
  expect(action).toEqual(expect.any(Object))
  expect(action[0]).toHaveProperty("id", "LHTexEiizN4C")
  expect(action[0]).toHaveProperty("volumeInfo")
  expect(action[0]).toHaveProperty("volumeInfo.title", "The Shit Book")
  expect(action[0]).toHaveProperty("volumeInfo.authors", ["Thomas N. Bainter"])
})
