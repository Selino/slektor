import React from "react"
import "./App.css"
import Nav from "./components/nav/Nav"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import BookList from "./components/booksearch/BookList"
import ChallengesList from "./components/challenges/ChallengesList"

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div className='app-body'>
          <Route path='/challenges' component={ChallengesList} />
          <Route path='/booklist' component={BookList} />
          <Route exact path='' render={() => <Redirect to='/challenges' />} />
        </div>
      </div>
    </Router>
  )
}

export default App
