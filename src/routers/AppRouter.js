import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BookList from "../components/booksearch/BookList"
import CreateChallenge from "../components/challenges/CreateChallenge"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage.js"
import GlobalNav from "../components/nav/GlobalNav"
import ChallengesList from "../components/challenges/ChallengesList"
import "../App.css"

const AppRouter = () => (
  <BrowserRouter>
    <div className='App'>
      <GlobalNav />
      <div className='app-body'>
        <Switch>
          <Route path='/' component={BookList} exact={true} />
          <Route path='/booklist' component={BookList} />
          <Route path='/challenges' component={ChallengesList} />
          <Route path='/create' component={CreateChallenge} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default AppRouter

// <Route path='/edit/:id' component={EditChallenge} />
