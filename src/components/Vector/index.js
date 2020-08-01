import React from 'react';
import './styles.css';

export const TopVector = ({ width='60vw', height='100px', color='white' }) => (
    <div className="Vector TopVector" style={{ width, minWidth: width, height, minHeight:height }}>
        <div style={{ borderBottom: `solid 1px ${color}`, borderRight: `solid 1px ${color}` }}></div>
        <div style={{ borderBottom: `solid 1px ${color}` }}></div>
    </div>
);

export const BottomVector = ({ width='60vw', height='100px', color='white' }) => (
    <div className="Vector BottomVector" style={{ width, minWidth: width, height, minHeight:height }}>
        <div style={{ borderTop: `solid 1px ${color}` }}></div>
        <div style={{ borderTop: `solid 1px ${color}`, borderLeft: `solid 1px ${color}` }}></div>
    </div>
);