import React from "react"
import Dinero from "dinero.js"

export default function ChallengeTotalBids(props) {
  console.log(props.Challenges)
  let myVar = 0
  props.Challenges.map((challenge) => {
    myVar = myVar + challenge.amount
  })
  return (
    <>
      {Dinero({
        amount: myVar,
        currency: "USD",
      }).toFormat("$0,0.00")}
    </>
  )
}
