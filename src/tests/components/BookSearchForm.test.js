import React from "react"
import { shallow } from "enzyme"
import booksForm from "../../components/books/booksForm"

test("should render the book search form", () => {
  const wrapper = shallow(<booksForm />)
  expect(wrapper).toMatchSnapshot()
})
