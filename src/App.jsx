import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import LandingPage from './components/LandingPage'
import PlayersContainer from './containers/PlayersContainer'
import TeamsContainer from './containers/TeamsContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerForm from './components/players/PlayerForm';
import TeamForm from './components/teams/TeamForm';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class App extends React.Component {
  loggedIn = () => {
    if (this.props.loggedIn === false) {
      return true
    }
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/home" render={() => (
              this.loggedIn() ? (
                <Redirect to="/"/>
              ) : (
                <>
                  <Header />
                  <Home />
                </>
              )
            )}/>
            <Route exact path="/players" render={() => (
              this.loggedIn() ? (
                <Redirect to="/"/>
              ) : (
                <>
                  <Header />
                  <PlayersContainer />
                </>
              )
            )}/>
            <Route exact path="/teams" render={() => (
              this.loggedIn() ? (
                <Redirect to="/"/>
              ) : (
                <>
                  <Header />
                  <TeamsContainer />
                </>
              )
            )}/>
            <Route exact path="/add-player" render={() => (
              this.loggedIn() ? (
                <Redirect to="/"/>
              ) : (
                <>
                  <Header />
                  <PlayerForm />
                </>
              )
            )}/>
            <Route exact path="/add-team" render={() => (
              this.loggedIn() ? (
                <Redirect to="/"/>
              ) : (
                <>
                  <Header />
                  <TeamForm />
                </>
              )
            )}/>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(App);