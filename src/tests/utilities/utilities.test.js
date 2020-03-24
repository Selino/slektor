import { simulateSearch, getVisibleItems } from "../../utilities/Utils"
import moment from "moment"

test("should return sample data with a book list", () => {
  const action = simulateSearch().items
  expect(action).toEqual(expect.any(Object))
  expect(action[0]).toHaveProperty("id", "LHTexEiizN4C")
  expect(action[0]).toHaveProperty("volumeInfo")
  expect(action[0]).toHaveProperty("volumeInfo.title", "The Shit Book")
  expect(action[0]).toHaveProperty("volumeInfo.authors", ["Thomas N. Bainter"])
})

// filters sample data
const challengesSampleData = [
  {
    id: "1",
    owner: "John Doe",
    reader: "Steve Jang",
    status: "running",
    bookID: "xIItr7-StUEC",
    bookTitle: "The Hobbit",
    bookThumbnail:
      "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 500,
    startDate: moment(1583326800000),
    endDate: moment(1588338000000)
  },
  {
    id: "2",
    owner: "Steve Jang",
    reader: "Jane Wilder",
    status: "running",
    bookID: "H8ON-dTgQQYC",
    bookTitle: "Kama Pootra",
    bookThumbnail:
      "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 300,
    startDate: moment(1580562000000),
    endDate: moment(1585746000000)
  },
  {
    id: "3",
    owner: "Carol Johnson",
    reader: "Mike Butt",
    status: "running",
    bookID: "H8ON-dTgQQYC",
    bookTitle: "The Hobbit, Or, There and Back Again",
    bookThumbnail:
      "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 1500,
    startDate: moment(1583067600000),
    endDate: moment(1586955600000)
  }
]

test("should return a single challenge item that matches the second challenge by text string", () => {
  const filters = {
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
    text: "poo"
  }
  const result = getVisibleItems(challengesSampleData, filters)
  expect(result).toEqual([challengesSampleData[1]])
  expect(result[0]).toHaveProperty("bookTitle", "Kama Pootra")
})

test("should filter between startDate & endDate", () => {
  const filters = {
    sortBy: "date",
    startDate: moment(1583067600000),
    endDate: moment(1586955600000),
    text: ""
  }
  const result = getVisibleItems(challengesSampleData, filters)
  expect(result).toEqual([challengesSampleData[2]])
  expect(result[0]).toHaveProperty(
    "bookTitle",
    "The Hobbit, Or, There and Back Again"
  )
})

test("should sort by amount descending", () => {
  const filters = {
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
    text: ""
  }
  const result = getVisibleItems(challengesSampleData, filters)
  expect(result[0]).toHaveProperty("amount", 1500)
})
