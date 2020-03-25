import React from "react"
import Dinero from "dinero.js"
import moment from "moment"
import ChallengeListItem from "../../components/challenges/ChallengeListItem"
import { shallow } from "enzyme"
import ChallengeListData from "../fixtures/challengesFixture"

test("should render a single challenge item", () => {
  const wrapper = shallow(
    <ChallengeListItem
      key={ChallengeListData[0].id}
      {...ChallengeListData[0]}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
