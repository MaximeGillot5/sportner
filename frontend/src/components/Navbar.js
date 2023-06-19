import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        if (typeof document !== 'undefined') {
            document.body.classList.toggle("nav-open");
        }
    };

    return (
        <Router>
            <header id="navbar">
                <div>
                    <h3>SPORT<span id="text-orange">NER</span></h3>
                </div>
                <nav id='links' ref={navRef}>
                    <div className="links">
                        <a href="/">Accueil</a>
                        <a href="/#">évenements</a>
                        <a href="/#">Sports</a>
                        <a href="/about">à propos</a>
                    </div>
                    <div>
                        <a href="/login">Connexion</a>
                    </div>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </Router>

    );
}

export default Navbar;
