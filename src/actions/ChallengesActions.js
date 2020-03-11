export const createChallenge = ({
  id = "",
  owner = "",
  reader = "",
  status = "",
  bookID = "",
  bookTitle = "",
  bookThumbnail = "",
  amount = 0,
  startDate = 0,
  endDate = 0
} = {}) => ({
  type: "CREATE_CHALLENGE",
  challenge: {
    id,
    owner,
    reader,
    status,
    bookID,
    bookTitle,
    bookThumbnail,
    amount,
    startDate,
    endDate
  }
})

export const removeChallenge = ({ id } = {}) => ({
  type: "REMOVE_CHALLENGE",
  challenge: {
    id: id
  }
})

export const updateChallenge = (id, updates) => ({
  type: "UPDATE_CHALLENGE",
  challenge: {
    id: id,
    updates
  }
})
