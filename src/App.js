import React from "react"
import "./App.css"
import DetailContainer from "./components/detail/DetailContainer"
import Nav from "./components/nav/Nav"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
      </header>
      <div>
        <DetailContainer />
      </div>
    </div>
  )
}

export default App
