import React from "react"
import "./App.css"
import DetailContainer from "./components/detail/DetailContainer"
import Nav from "./components/nav/Nav"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import BookSearch from "./components/booksearch/BookSearch"

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div className='app-body'>
          <Route path='/detail' component={DetailContainer} />
          <Route path='/booksearch' component={BookSearch} />
          <Route exact path='' render={() => <Redirect to='/booksearch' />} />
        </div>
      </div>
    </Router>
  )
}

export default App
