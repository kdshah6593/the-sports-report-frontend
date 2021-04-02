import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        App
        <Footer />
      </div>
    );
  }
}

export default App;