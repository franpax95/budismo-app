import React, { useContext } from 'react';
import './App.css';

import { Context } from '../Context';

import Home from '../pages/Home';
import Article from '../pages/Article';

const App = () => {
    const [state, setState] = useContext(Context);

    return (
        <div className="App">
            <Home />
            <Article />
        </div>
    );
}

export default App;