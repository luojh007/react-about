import React, { Component } from 'react'
import { Column, Table } from "react-virtualized";
import Draggable from "react-draggable";
import faker from 'faker'

const TOTAL_WIDTH = 500;
// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
    location: faker.address.city()
}));
export default class TestOne extends React.Component {
    state = {
        widths: {
            name: 0.33,
            location: 0.33,
            description: 0.33
        }
    };

    render() {
        // const { list } = this.props;
        const { widths } = this.state;

        return (
            <Table
                width={700}
                height={400}
                headerHeight={20}
                rowHeight={30}
                rowCount={list.length}
                rowGetter={({ index }) => list[index]}
            >
                <Column
                    headerRenderer={this.headerRenderer}
                    dataKey="name"
                    label="Name"
                    width={widths.name * TOTAL_WIDTH}
                />
                <Column
                    headerRenderer={this.headerRenderer}
                    dataKey="location"
                    label="Location"
                    width={widths.location * TOTAL_WIDTH}
                />
                <Column
                    dataKey="description"
                    label="Description"
                    width={widths.description * TOTAL_WIDTH}
                />
            </Table>
        );
    }

    headerRenderer = ({
        columnData,
        dataKey,
        disableSort,
        label,
        sortBy,
        sortDirection
    }) => {
        return (
            <React.Fragment key={dataKey}>
                <div className="ReactVirtualized__Table__headerTruncatedText">
                    {label}
                </div>
                <Draggable
                    axis="x"
                    defaultClassName="DragHandle"
                    defaultClassNameDragging="DragHandleActive"
                    onDrag={(event, { deltaX }) =>
                        this.resizeRow({
                            dataKey,
                            deltaX
                        })
                    }
                    position={{ x: 0 }}
                    zIndex={999}
                >
                    <span className="DragHandleIcon">⋮</span>
                </Draggable>
            </React.Fragment>
        );
    };

    resizeRow = ({ dataKey, deltaX }) =>
        this.setState(prevState => {
            const prevWidths = prevState.widths;
            const percentDelta = deltaX / TOTAL_WIDTH;

            // This is me being lazy :)
            const nextDataKey = dataKey === "name" ? "location" : "description";

            return {
                widths: {
                    ...prevWidths,
                    [dataKey]: prevWidths[dataKey] + percentDelta,
                    [nextDataKey]: prevWidths[nextDataKey] - percentDelta
                }
            };
        });
}
