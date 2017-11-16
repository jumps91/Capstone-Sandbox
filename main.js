import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rectangle from './rectangle';
import Hexagon from './hexagon';

const Main = (props) => {


    return (
        <div>
            Testing React-Konva
                <Rectangle />
            <h1 style={{position: 'absolute', left: '180px'}}>Catan Board Testing</h1>
            <br />
        <Hexagon />
            </div>
    );
};

export default Main;
