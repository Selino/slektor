export const createChallenge = ({
  id = "",
  bookID = "",
  amount = 0,
  startDate = 0,
  endDate = 0,
  reader = "",
  owner = ""
} = {}) => ({
  type: "CREATE_CHALLENGE",
  challenge: {
    id,
    owner,
    reader,
    bookID,
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
