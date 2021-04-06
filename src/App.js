import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import LandingPage from './components/LandingPage'
import PlayersContainer from './containers/PlayersContainer'
import TeamsContainer from './containers/TeamsContainer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlayerForm from './components/players/PlayerForm';
import TeamForm from './components/teams/TeamForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/home">
              <Header />
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/players">
              <Header />
              <PlayersContainer />
            </Route>
            <Route exact path="/teams">
              <Header />
              <TeamsContainer />
            </Route>
            <Route exact path="/add-player">
              <Header />
              <PlayerForm />
            </Route>
            <Route exact path="/add-team">
              <Header />
              <TeamForm />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;