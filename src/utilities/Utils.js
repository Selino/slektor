import { simulatedSearchData } from "../sampledata"
import moment from "moment"

export const simulateSearch = () => {
  return simulatedSearchData()
}

export const getVisibleItems = (item, { sortBy, startDate, endDate, text }) => {
  return item
    .filter(item => {
      const startDateMoment = moment(item.startDate)
      const endDateMoment = moment(item.endDate)
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(startDateMoment, "day")
        : true
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(endDateMoment, "day")
        : true
      const textMatch = item.bookTitle
        .toLowerCase()
        .includes(text.toLowerCase())
      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.startDate < b.endDate ? 1 : -1
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1
      } else {
        return []
      }
    })
}
