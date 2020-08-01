import React from 'react';
import './styles.css';
import data from '../../data.json';

const Navbar = ({ onClick }) => {
    return(
        <div className="Navbar">
            {data.map(x => <button key={x.id} id={x.id} onClick={onClick}>{x.title}</button>)}
            {/* <button id="0" onClick={onClick}>Intro</button>
            <button id="1" onClick={onClick}>La historia</button>
            <button id="2" onClick={onClick}>Curiosidades</button>
            <button id="3" onClick={onClick}>Sección 4</button> */}
        </div>
    );
}

export default Navbar;