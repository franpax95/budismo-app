import React, { useState } from 'react';

const Context = React.createContext([{}, () => {}]);

const Provider = (props) => {
    const [state, setState] = useState({
        isArticle: false,
        idArticle: 0,
        heightArticle: 0
    });

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, Provider };