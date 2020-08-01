import React from 'react';
import './styles.css';

const Navbar = ({ onClick }) => {
    return(
        <div className="Navbar">
            <button id="0" onClick={onClick}>Intro</button>
            <button id="1" onClick={onClick}>La historia</button>
            <button id="2" onClick={onClick}>Curiosidades</button>
            <button id="3" onClick={onClick}>Sección 4</button>
        </div>
    );
}

export default Navbar;