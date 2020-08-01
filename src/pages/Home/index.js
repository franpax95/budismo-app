import React, { useContext, useEffect } from 'react';
import './Home.css';

import { Context } from '../../Context';
import { useSpring, animated } from 'react-spring';

import Navbar from '../../components/Navbar';
import { TopVector, BottomVector } from '../../components/Vector';


const BACKGROUND = '/background5.jpg';

const Home = () => {
    const [state, setState] = useContext(Context);

    const [parentProps, setParentProps] = useSpring(() => ({ filter: 'blur(0px)', transform: 'scale(1)' }));
    const [childrenProps, setChildrenProps] = useSpring(() => ({ opacity: 0 }));

    const onClick = e => {
        setState({ 
            ...state, 
            isArticle: !state.isArticle,
            idArticle: e.target.id
        });
    }

    useEffect(() => {
        const blur = (state.isArticle) ? 4 : 0;
        const opacity = (state.isArticle) ? 0 : 1;
        const scale = (state.isArticle) ? 1.1 : 1;

        setParentProps({ filter: `blur(${blur}px)`, transform: `scale(${scale})` });
        setChildrenProps({ opacity });
    }, [state.isArticle]);

    return (
        <animated.div className="Home" style={{ 
            ...parentProps, 
            backgroundImage: `url(${BACKGROUND})`,
            height: (state.isArticle) ? `${state.heightArticle}px` : 'auto'
        }}>
            <animated.div style={childrenProps}>
                <div className="icon">
                    <img src="ying-yang.svg" alt="" />
                </div>
                <TopVector width='50%' height='75px' />  

                <p className="title">¿Conoces la fascinante historia de Buda?</p>
                <p className="subtitle"><i>Budismo proviene de Buda, que en sáncrito significa despertar</i></p>
            
                <BottomVector width='50%' height='75px' />
                <Navbar onClick={onClick} />
            </animated.div>
        </animated.div>
    );
}

export default Home;