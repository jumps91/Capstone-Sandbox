
// not being used anywhere, just for mockup

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Circle, Stage, Group, RegularPolygon } from 'react-konva';

export class Hexagon extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Circle
                x={250}
                y={95}
                radius={10}
                fill={'black'}
                shadowBlur={5}
            />
        );
    };
};

export default Hexagon;
