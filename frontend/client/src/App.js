import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
  return (
    <div>
      <Navbar />
        <Home />
      <Footer />
    </div>
  );}
}

export default App;