import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Rect, Stage, Group } from 'react-konva';

const Rectangle = (props) => {

    return (
        <Stage id={'stage'} name={'stage'} width={700} height={200}>
            <Layer>
                {/* first main row */}
                <Rect
                    key="t1"
                    x={10}
                    y={10}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                <Rect
                    key="e1"
                    x={60}
                    y={10}
                    width={10}
                    height={50}
                    fill={'yellow'}
                    shadowBlur={5}
                />
                <Rect
                    key="t2"
                    x={70}
                    y={10}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                <Rect
                    key="e2"
                    x={120}
                    y={10}
                    width={10}
                    height={50}
                    fill={'yellow'}
                    shadowBlur={5}
                />
                <Rect
                    key="t3"
                    x={130}
                    y={10}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                {/* first sub row */}
                <Rect
                    key="e7"
                    x={10}
                    y={60}
                    width={50}
                    height={10}
                    fill={'blue'}
                    shadowBlur={5}
                />
                <Rect
                    key="s1"
                    x={60}
                    y={60}
                    width={10}
                    height={10}
                    fill={'red'}
                    shadowBlur={5}
                />
                <Rect
                    key="e8"
                    x={70}
                    y={60}
                    width={50}
                    height={10}
                    fill={'blue'}
                    shadowBlur={5}
                />
                <Rect
                    key="s2"
                    x={120}
                    y={60}
                    width={10}
                    height={10}
                    fill={'red'}
                    shadowBlur={5}
                />
                <Rect
                    key="e9"
                    x={130}
                    y={60}
                    width={50}
                    height={10}
                    fill={'blue'}
                    shadowBlur={5}
                />
                {/* second main row */}
                <Rect
                    key="t4"
                    x={10}
                    y={70}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                <Rect
                    key="e3"
                    x={60}
                    y={70}
                    width={10}
                    height={50}
                    fill={'yellow'}
                    shadowBlur={5}
                />
                <Rect
                    key="t5"
                    x={70}
                    y={70}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                <Rect
                    key="e4"
                    x={120}
                    y={70}
                    width={10}
                    height={50}
                    fill={'yellow'}
                    shadowBlur={5}
                />
                <Rect
                    key="t6"
                    x={130}
                    y={70}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                {/* second sub row */}
                <Rect
                    key="e10"
                    x={10}
                    y={120}
                    width={50}
                    height={10}
                    fill={'blue'}
                    shadowBlur={5}
                />
                <Rect
                    key="s3"
                    x={60}
                    y={120}
                    width={10}
                    height={10}
                    fill={'red'}
                    shadowBlur={5}
                />
                <Rect
                    key="e11"
                    x={70}
                    y={120}
                    width={50}
                    height={10}
                    fill={'blue'}
                    shadowBlur={5}
                />
                <Rect
                    key="s4"
                    x={120}
                    y={120}
                    width={10}
                    height={10}
                    fill={'red'}
                    shadowBlur={5}
                />
                <Rect
                    key="e12"
                    x={130}
                    y={120}
                    width={50}
                    height={10}
                    fill={'blue'}
                    shadowBlur={5}
                />
                {/* third main row */}
                <Rect
                    key="t7"
                    x={10}
                    y={130}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                <Rect
                    key="e5"
                    x={60}
                    y={130}
                    width={10}
                    height={50}
                    fill={'yellow'}
                    shadowBlur={5}
                />
                <Rect
                    key="t8"
                    x={70}
                    y={130}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
                <Rect
                    key="e6"
                    x={120}
                    y={130}
                    width={10}
                    height={50}
                    fill={'yellow'}
                    shadowBlur={5}
                />
                <Rect
                    key="t9"
                    x={130}
                    y={130}
                    width={50}
                    height={50}
                    fill={'green'}
                    shadowBlur={5}
                />
            </Layer>
        </Stage>
    );
};

export default Rectangle;
