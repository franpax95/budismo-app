import React from 'react';
import './styles.css';
import data from '../../data.json';

const Navbar = ({ onClick }) => {
    return(
        <div className="Navbar">
            {data.map(x => <button key={x.id} id={x.id} onClick={onClick}>{x.title}</button>)}
        </div>
    );
}

export default Navbar;