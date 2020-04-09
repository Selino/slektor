import React from "react"
import Dinero from "dinero.js"

export default function ChallengeTotalBids(props) {
  const getAmounts = props.Challenges.map((challenge) => {
    return challenge.amount
  })

  const totalAmount = getAmounts.reduce((a, b) => a + b, 0)
  return (
    <>
      {Dinero({
        amount: totalAmount,
        currency: "USD",
      }).toFormat("$0,0.00")}
    </>
  )
}
