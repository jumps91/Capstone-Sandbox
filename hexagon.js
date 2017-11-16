import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Rect, Stage, Group, RegularPolygon } from 'react-konva';

const Hexagon = (props) => {

    return (
        <Stage width={700} height={700}>
            <Layer>
                <RegularPolygon
                    x={200}
                    y={100}
                    sides={6}
                    radius={50}
                    fill={'green'}
                />
                <RegularPolygon
                    x={300}
                    y={100}
                    sides={6}
                    radius={50}
                    fill={'blue'}
                />
                <RegularPolygon
                    x={400}
                    y={100}
                    sides={6}
                    radius={50}
                    fill={'green'}
                />





                <RegularPolygon
                    x={150}
                    y={185}
                    sides={6}
                    radius={50}
                    fill={'black'}
                />
                <RegularPolygon
                    x={250}
                    y={185}
                    sides={6}
                    radius={50}
                    fill={'red'}
                />
                <RegularPolygon
                    x={350}
                    y={185}
                    sides={6}
                    radius={50}
                    fill={'black'}
                />
                <RegularPolygon
                    x={450}
                    y={185}
                    sides={6}
                    radius={50}
                    fill={'red'}
                />



                <RegularPolygon
                    x={100}
                    y={270}
                    sides={6}
                    radius={50}
                    fill={'blue'}
                />
                <RegularPolygon
                    x={200}
                    y={270}
                    sides={6}
                    radius={50}
                    fill={'green'}
                />
                <RegularPolygon
                    x={300}
                    y={270}
                    sides={6}
                    radius={50}
                    fill={'yellow'}
                />
                <RegularPolygon
                    x={400}
                    y={270}
                    sides={6}
                    radius={50}
                    fill={'green'}
                />
                <RegularPolygon
                    x={500}
                    y={270}
                    sides={6}
                    radius={50}
                    fill={'blue'}
                />




                <RegularPolygon
                    x={150}
                    y={355}
                    sides={6}
                    radius={50}
                    fill={'red'}
                />
                <RegularPolygon
                    x={250}
                    y={355}
                    sides={6}
                    radius={50}
                    fill={'black'}
                />
                <RegularPolygon
                    x={350}
                    y={355}
                    sides={6}
                    radius={50}
                    fill={'red'}
                />
                <RegularPolygon
                    x={450}
                    y={355}
                    sides={6}
                    radius={50}
                    fill={'black'}
                />




                <RegularPolygon
                    x={200}
                    y={440}
                    sides={6}
                    radius={50}
                    fill={'green'}
                />
                <RegularPolygon
                    x={300}
                    y={440}
                    sides={6}
                    radius={50}
                    fill={'blue'}
                />
                <RegularPolygon
                    x={400}
                    y={440}
                    sides={6}
                    radius={50}
                    fill={'green'}
                />



            </Layer>
        </Stage>
    );
};

export default Hexagon;
