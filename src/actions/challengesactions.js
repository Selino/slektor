import { v4 as uuidv4 } from "uuid"
import moment from "moment"

export const createChallenge = ({
  id = uuidv4(),
  owner = "",
  reader = "",
  status = "",
  bookID = "",
  bookTitle = "",
  bookThumbnail = "",
  amount = 0,
  startDate = moment(),
  endDate = moment().endOf("month"),
} = {}) => ({
  type: "CREATE_CHALLENGE",
  challenge: {
    id,
    owner,
    reader,
    status,
    bookID,
    bookThumbnail,
    bookTitle,
    amount,
    startDate,
    endDate,
  },
})

export const removeChallenge = ({ id } = {}) => ({
  type: "REMOVE_CHALLENGE",
  challenge: {
    id: id,
  },
})

export const updateChallenge = (id, updates) => ({
  type: "UPDATE_CHALLENGE",
  challenge: {
    id: id,
    updates,
  },
})
