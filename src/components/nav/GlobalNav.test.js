import React from "react"
import GlobalNav from "./GlobalNav"
import { shallow } from "enzyme"

test("should render the global nav", () => {
  const wrapper = shallow(<GlobalNav />)
  expect(wrapper).toMatchSnapshot()
  // expect(wrapper.find(".App-logo")).toHaveLength(1)
  // expect(wrapper.find(".GlobalNav").text()).toContain("Slektor App")
  // expect(wrapper.find("#basic-navbar-nav")).toHaveLength(1)
})
