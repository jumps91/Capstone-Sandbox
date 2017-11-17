import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';

// import Rectangle from './rectangle';
import Hexagon from './hexagon';
import Circles from './circles';
import Roads from './roads';
import Intersection from './intersection1';

const Main = (props) => {

    return (
        <div>
            {/* Testing React-Konva */}
            {/* <Rectangle /> */}
            <h1 style={{ position: 'absolute', left: '180px' }}>Catan Board Testing</h1>
            <br />
            <Stage width={700} height={640}>
                <Hexagon />
                <Circles />
                <Roads />
                <Intersection />
            </Stage>
        </div>
    );
};

export default Main;
