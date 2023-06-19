import React from 'react';
import './App.css'
import Home from './page/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './page/About';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from "./page/LoginForm"



const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
};

export default App;