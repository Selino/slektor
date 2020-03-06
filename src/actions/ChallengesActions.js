export const createChallenge = ({
  id = "",
  bookID = "",
  amount = 0,
  createDate = 0,
  expirationDate = 0,
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
    createDate,
    expirationDate
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
