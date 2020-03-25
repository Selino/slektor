import React from "react"
import { shallow } from "enzyme"
import BookSearchForm from "../../components/booksearch/BookSearchForm"

test("should render the book search form", () => {
  const wrapper = shallow(<BookSearchForm />)
  expect(wrapper).toMatchSnapshot()
})