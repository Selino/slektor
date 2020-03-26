import React from "react"
import { shallow } from "enzyme"
import { BookList } from "./BookList"
import BooksListData from "../../tests/fixtures/booksFixture"

test("should render the BookList with books", () => {
  const wrapper = shallow(<BookList books={BooksListData} />)
  expect(wrapper).toMatchSnapshot()
})
