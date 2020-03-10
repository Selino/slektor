import React from "react"
import "./App.css"
import GlobalNav from "./components/nav/GlobalNav"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import BookList from "./components/booksearch/BookList"
import ChallengesList from "./components/challenges/ChallengesList"
import getVisibleItems from "./utilities/Utils"

function App() {
  return (
    <Router>
      <div className='App'>
        <GlobalNav />
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
