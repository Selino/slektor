import filtersReducer from "./FiltersReducer"
import moment from "moment"

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual({
    sortBy: "date",
    startDate: null,
    endDate: null,
    text: ""
  })
})

test("should set text to string", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "bubba"
  })
  expect(state.text).toBe("bubba")
})

test("should set sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" })
  expect(state.sortBy).toBe("amount")
})

test("should set sort by to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" })
  expect(state.sortBy).toBe("date")
})

test("should set starDate", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0)
  })
  expect(state.startDate).toEqual(moment(0))
})

test("should set endDate", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0)
  })
  expect(state.endDate).toEqual(moment(0))
})
