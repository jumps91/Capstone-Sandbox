import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Stage, Group } from 'react-konva';

// import Rectangle from './rectangle';
import Hexagon from './hexagon';
import Circles from './circles';
import Roads from './roads';
// import Intersection from './intersection1';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleWheel = this.handleWheel.bind(this);
    }

    handleWheel(thisEvent, thisStage) {
        let e = thisEvent.evt;
        let stage = thisStage._stage;
        var scaleBy = 1.03;
        e.preventDefault();

        console.log('hello');
        console.log(e);
        // console.log(stage);

        var oldScale = stage.scaleX();

        var mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
        };

        var newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
        stage.scale({ x: newScale, y: newScale });

        var newPos = {
            x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
            y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
        };
        stage.position(newPos);
        stage.batchDraw();
    }

    render() {

        return (
            <div style={{ backgroundColor: 'grey' }} >
                {/* Testing React-Konva */}
                {/* <Rectangle /> */}
                <h1 style={{ position: 'absolute', left: '180px' }}>Catan Board Testing</h1>
                <br />
                <Stage
                    ref={(thisStage) => { this.stage = thisStage; }}
                    onWheel={(e) => { this.handleWheel(e, this.stage); }}
                    width={700}
                    height={640}
                    draggable={true}
                >
                    <Hexagon />
                    <Circles />
                    <Roads />
                    {/* <Intersection /> */}
                </Stage>
            </div>
        );
    }
}

export default Main;
