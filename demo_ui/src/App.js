import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from './Register'
import ViewContestants from './viewContestants'

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="image" >
          <nav className="navbar navbar-expand-md navbar-dark bg-dark " >
            <span className="navbar-brand font-weight-bolder">Art Competition</span>
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link to="/register" className="nav-link" >Register</Link>
                </li>

                <li className="nav-item ">
                  <Link to="/viewContestants" className="nav-link" >View Contestants</Link>
                </li>
              </ul>
          </nav>
          <Switch>
            <Route exact path="/register" component={Register} ></Route>
            <Route exact path="/viewContestants" component={ViewContestants} ></Route>
            <Route exact path="/" component={Register} ></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
