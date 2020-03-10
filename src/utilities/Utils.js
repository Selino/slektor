import simulatedSearchData from "../sampledata"

export const simulateSearch = string => {
  return simulatedSearchData.items
}

export const getVisibleItems = (item, { text, startDate, endDate, sortBy }) => {
  return item
    .filter(item => {
      const startDateMatch =
        typeof startDate !== "number" || item.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== "number" || item.createdAt <= endDate
      const textMatch = item.owner.toLowerCase().includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.startDate < b.endDate ? 1 : -1
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1
      }
    })
}
