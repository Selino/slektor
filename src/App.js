import React from "react"
import "./App.css"
import DetailContainer from "./components/detail/DetailContainer"
import Nav from "./components/nav/Nav"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import BookList from "./components/booksearch/BookList"

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div className='app-body'>
          <Route path='/detail' component={DetailContainer} />
          <Route path='/booklist' component={BookList} />
          <Route exact path='' render={() => <Redirect to='/booklist' />} />
        </div>
      </div>
    </Router>
  )
}

export default App
