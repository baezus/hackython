import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import routes from './config/routes';
import Footer from './components/Footer'

function App () {
  return (
    <div className="App">
      <Navbar />
      { routes }
      <Footer />
    </div>
  );
}

export default App;