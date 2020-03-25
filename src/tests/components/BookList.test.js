import React from "react"
import { shallow } from "enzyme"
import { BookList } from "../../components/booksearch/BookList"
import BooksListData from "../fixtures/booksFixture"
import { Provider } from "react-redux"

test("should render the BookList with books", () => {
  const wrapper = shallow(<BookList books={BooksListData} />)
  expect(wrapper).toMatchSnapshot()
})
