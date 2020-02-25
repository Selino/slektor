import React from "react"
import "./App.css"
import DetailContainer from "./components/detail/DetailContainer"
import Nav from "./components/nav/Nav"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
      </header>
      <div className='body'>
        <DetailContainer />
      </div>
    </div>
  )
}

export default App
