import challengesReducer from "../../reducers/ChallengesReducer"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"

test("should return default challenges", () => {
  const expectedChallenge = {
    id: expect.any(String),
    owner: expect.any(String),
    reader: expect.any(String),
    status: expect.any(String),
    bookID: expect.any(String),
    bookTitle: expect.any(String),
    bookThumbnail: expect.any(String),
    amount: expect.any(Number),
    startDate: expect.any(Object),
    endDate: expect.any(Object)
  }
  const state = challengesReducer(undefined, { type: "@@INIT" })
  expect(state).toHaveLength(3)
  expect(state[0]).toEqual(expectedChallenge)
  expect(state[0]).toHaveProperty("id", "1")
  expect(state[2]).toHaveProperty("id", "3")
  expect(state[0].amount).toBeGreaterThanOrEqual(100)
})

//state data
const currentState = [
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

test("should create a new 4th challenge", () => {
  const newChallengeData = {
    id: "4",
    owner: "Lenny Kravitz",
    reader: "Butt McJones",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "The Road",
    bookThumbnail:
      "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 200,
    startDate: moment(0),
    endDate: moment(30)
  }
  const state = challengesReducer(currentState, {
    type: "CREATE_CHALLENGE",
    challenge: newChallengeData
  })
  expect(state).toHaveLength(4)
  expect(state[3]).toEqual(newChallengeData)
})

test("should update the second challenge to show amount = 1500", () => {
  const amountChange = { amount: 1500 }
  const state = challengesReducer(currentState, {
    type: "UPDATE_CHALLENGE",
    challenge: { id: "2", updates: amountChange }
  })
  expect(state[1].amount).toEqual(1500)
})

test("should remove second challenge from state", () => {
  const state = challengesReducer(currentState, {
    type: "REMOVE_CHALLENGE",
    challenge: { id: "2" }
  })
  expect(state).toHaveLength(2)
  expect(state[0]).toHaveProperty("id", "1")
  expect(state[1]).toHaveProperty("id", "3")
})
