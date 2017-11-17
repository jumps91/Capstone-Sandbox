
// not being used anywhere, just for mockup

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Circle, Layer } from 'react-konva';

export class Intersection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = 'http://konvajs.github.io/assets/yoda.jpg';
        image.onload = () => {
            this.setState({
                image: image
            });
        };
    }

    render() {
        return (
            <Layer>
                <Circle
                    x={60}
                    y={60}
                    radius={50}
                    fill={'black'}
                    fillPatternImage={this.image}
                    shadowBlur={5}
                />
            </Layer>
        );
    };
};

export default Intersection;
