import challengesReducer from "../../reducers/ChallengesReducer"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import currentStateData, {
  newChallengeData
} from "../fixtures/challengesFixture"

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

test("should create a new 4th challenge", () => {
  const state = challengesReducer(currentStateData, {
    type: "CREATE_CHALLENGE",
    challenge: newChallengeData
  })
  expect(state).toHaveLength(4)
  expect(state[3]).toEqual(newChallengeData)
})

test("should update the second challenge to show amount = 1500", () => {
  const amountChange = { amount: 1500 }
  const state = challengesReducer(currentStateData, {
    type: "UPDATE_CHALLENGE",
    challenge: { id: "2", updates: amountChange }
  })
  expect(state[1].amount).toEqual(1500)
})

test("should remove second challenge from state", () => {
  const state = challengesReducer(currentStateData, {
    type: "REMOVE_CHALLENGE",
    challenge: { id: "2" }
  })
  expect(state).toHaveLength(2)
  expect(state[0]).toHaveProperty("id", "1")
  expect(state[1]).toHaveProperty("id", "3")
})
