import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Books from "../components/books/Books"
import CreateChallenge from "../components/challenges/CreateChallenge"
import HelpPage from "../components/helppage/HelpPage"
import GlobalNav from "../components/nav/GlobalNav"
import ChallengesList from "../components/challenges/ChallengesList"
import EditChallenge from "../components/challenges/EditChallenge"
import "../App.sass"

const AppRouter = () => (
  <BrowserRouter>
    <div className='App'>
      <GlobalNav />
      <div className='app-body'>
        <Switch>
          <Route path='/books' component={Books} />
          <Route path='/challenges' component={ChallengesList} />
          <Route path='/edit/:id' component={EditChallenge} />
          <Route path='/create' component={CreateChallenge} />
          <Route path='/help' component={HelpPage} />
          <Route component={Books} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default AppRouter
