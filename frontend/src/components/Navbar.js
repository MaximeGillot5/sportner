import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        if (typeof document !== 'undefined') {
            document.body.classList.toggle("nav-open");
        }
    };

    return (
        <header id="navbar">
            <div>
                <h3>SPORT<span id="text-orange">NER</span></h3>
            </div>
            <nav id='links' ref={navRef}>
                <div className="links">
                    <a href="/#">Accueil</a>
                    <a href="/#">évenements</a>
                    <a href="/#">Sports</a>
                    <a href="/#">à propos</a>
                </div>
                <div>
                    <a href="/#">Connexion</a>
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
    );
}

export default Navbar;
