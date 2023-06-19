import React from 'react';
import './App.css'
import Home from './page/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './page/About';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default App;