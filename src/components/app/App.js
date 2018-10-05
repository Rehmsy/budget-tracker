import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from '../categories/Dashboard';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <div className={styles.app}>
            
            <header>
              <Header/>
            </header>

            <main>
              <h1>Budget Tracker</h1>
              <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Redirect to ="/"/>
              </Switch>
            </main>

          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;