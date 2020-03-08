import simulatedSearchData from "../sampledata"

export const simulateSearch = string => {
  return simulatedSearchData.items
}

// Date.prototype.addDays = function(days) {
//   const date = new Date(this.valueOf())
//   date.setDate(date.getDate() + days)
//   return date
// }
// export const makeDate = () => {
//   return new Date()
// }
// export const makeExpirationDate = (days = 0) => {
//   const date = new Date()
//   return date.addDays(days)
// }
