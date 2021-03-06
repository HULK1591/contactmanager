import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact
          name="Shyam Patel"
          email="spatel@gmail.com"
          phone="212-222-2222"
        />

        <Contact
          name="Shyam Patel"
          email="spatel@gmail.com"
          phone="212-222-2222"
        />
      </div>
    );
  }
}

export default App;
