import React, { Component } from 'react';
import AppHeader from './AppHeader'
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Main />
        <Footer />
      </div>
    );
  }
}
