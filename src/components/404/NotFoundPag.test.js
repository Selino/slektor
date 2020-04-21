import React from "react"
import NotFoundPage from "./NotFoundPage"
import { shallow } from "enzyme"

test("should render the global nav", () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
