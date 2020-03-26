import moment from "moment"
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setEndDate,
  setStartDate
} from "./filtersactions"

test("should set the passed text string within the filter mechanism", () => {
  const action = setTextFilter("poop")
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "poop"
  })
})

test("should set the text string to '' within the filter mechanism", () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  })
})

test("should setup a sort by date object", () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  })
})

test("should setup a sort by amount obect", () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  })
})

test("should setup a startDate object with a valid moment date object", () => {
  const myMoment = moment(0)
  const action = setStartDate(myMoment)
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: myMoment
  })
})

test("should setup a endDate object with a valid moment date object", () => {
  const myMoment = moment(0)
  const action = setEndDate(myMoment)
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: myMoment
  })
})
