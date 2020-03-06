export const sortChallengesByDateCreated = () => ({
  type: "SORT_CHALLENGES_BY_DATE_CREATED"
})

export const sortChallengesByDateExpiring = () => ({
  type: "SORT_CHALLENGES_BY_DATE_EXPIRING"
})

export const sortChallengesByAmount = () => ({
  type: "SORT_CHALLENEGES_BY_AMOUNT"
})

export const sortChallengesByDateSpecified = date => ({
  type: "SORT_CHALLENGES_BY_DATE_SPECIFIED",
  sortChallengesByDateSpecified: date
})

// ------- books filters
export const sortBooksByAuthor = () => ({
  type: "SORT_BOOKS_BY_AUTHOR"
})

export const sortBooksByTitle = () => ({
  type: "SORT_BOOKS_BY_TITLE"
})
