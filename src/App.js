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
import BookSearch from "./components/booksearch/BookSearch"

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Nav />
        </header>
        <Switch>
          <div className='app-body'>
            <Route path='/detail'>
              <DetailContainer />
            </Route>
            <Route path='/booksearch'>
              <BookSearch />
            </Route>
            <Route
              exact
              path='/'
              render={() => <Redirect to='/booksearch' />}
            />
          </div>
        </Switch>
      </div>
    </Router>
  )
}

export default App
