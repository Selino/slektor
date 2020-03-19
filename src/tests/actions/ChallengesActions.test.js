import {
  createChallenge,
  removeChallenge,
  updateChallenge
} from "../../actions/ChallengesActions"
import moment from "moment"

test("should setup remove challenge action object", () => {
  const action = removeChallenge({ id: "123abc" })
  expect(action).toEqual({
    type: "REMOVE_CHALLENGE",
    challenge: {
      id: "123abc"
    }
  })
})

test("should setup an edit a challenge action object", () => {
  const action = updateChallenge("123abc", { amount: 1, reader: "John" })
  expect(action).toEqual({
    type: "UPDATE_CHALLENGE",
    challenge: {
      id: "123abc",
      updates: {
        amount: 1,
        reader: "John"
      }
    }
  })
})

test("should create a create an empty challenge action object", () => {
  const action = createChallenge()
  expect(action).toEqual({
    type: "CREATE_CHALLENGE",
    challenge: {
      id: expect.any(String),
      owner: "",
      reader: "",
      status: "",
      bookID: "",
      bookTitle: "",
      bookThumbnail: "",
      amount: 0,
      startDate: expect.any(Object),
      endDate: expect.any(Object)
    }
  })
})

test("should create a create challenge action object with provided values", () => {
  const now = moment()
  const challengeData = {
    id: "123abc",
    owner: "John Doe",
    reader: "Steve McQueen",
    status: "running",
    bookID: "bk123",
    bookTitle: "The Hobbit",
    bookThumbnail: "imgUrl",
    amount: 2400,
    startDate: now,
    endDate: now
  }
  const action = createChallenge(challengeData)
  expect(action).toEqual({
    type: "CREATE_CHALLENGE",
    challenge: {
      ...challengeData,
      id: expect.any(String)
    }
  })
})
