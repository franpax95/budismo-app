import React, { useContext, useEffect, useRef } from 'react';
import './Article.css';
import data from '../../data.json';

import { Context } from '../../Context';
import { useTransition, animated } from 'react-spring';

import { MdClose } from 'react-icons/md';

const nl2br = (str) => str.split('\n').map((item, key) => <span key={key}>{item}<br /></span>);

const Article = () => {
    const ref = useRef();
    const [state, setState] = useContext(Context);

    const transitions = useTransition(state.isArticle, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        // config: { duration: 200 }
    });

    useEffect(() => {
        if(ref.current)
            setState({ ...state, heightArticle: ref.current.clientHeight });
    }, [state.isArticle]);

    return state.isArticle && transitions.map(
        ({ item, key, props }) => 
            item && <animated.div className="Article" ref={ref} style={{ ...props }} key={key}>
                <div className="card">
                    <button className="close" onClick={() => setState({ ...state, isArticle: false })}>
                        <MdClose />
                    </button>

                    <div className="title">
                        <span>{data[state.idArticle].title}</span>
                        <hr />
                    </div>

                    <div className="image">
                        <img src={data[state.idArticle].image} alt="" />
                    </div>

                    <div className="content">
                        {nl2br(data[state.idArticle].content)}
                    </div>
                </div>
            </animated.div>
    );
}

export default Article;