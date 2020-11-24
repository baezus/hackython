import React from 'react';
import Navbar from './components/Navbar';
import routes from './config/routes';
import Footer from './components/Footer'

class App extends React.Component {
  render() {
  return (
    <div>
      <Navbar />
      { routes }
      <Footer />
    </div>
  );}
}

export default App;