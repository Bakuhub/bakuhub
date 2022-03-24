import {DataSet, Network} from "vis";
import React, {Component, createRef} from "react";

const nodes = new DataSet([

    {id: 1, label: "Node 1"},
    {id: 2, label: "Node 2"},
    {id: 3, label: "Node 3"},
    {id: 4, label: "Node 4"},
    {id: 5, label: "Node 5"}

]);


// create an array with edges
const edges = new DataSet([
    {from: 1, to: 3, label: "yes"},
    {from: 1, to: 2, label: "no"},
    {from: 2, to: 4, label: "red"},
    {from: 2, to: 5, label: "blue"},
]);

const data = {
    nodes: nodes,
    edges: edges
};
const options = {
    edges: {
        smooth: {
            type: "cubicBezier",
            forceDirection:
                    "horizontal",
            roundness: 0.4,
        },
    },
    layout: {
        hierarchical: {
            direction: "LR",
        },
    },
    physics: false,
};

// initialize your network!


export class VisNetwork extends Component {

    constructor() {
        // @ts-ignore
        super();
        // @ts-ignore
        this.network = {};
        // @ts-ignore
        this.appRef = createRef();
    }

    componentDidMount() {
        const nodes = [];
        const edges = [];
        for (var i = 0; i < 15; i++) {
            nodes.push({id: i, label: String(i)});
        }
        edges.push({from: 0, to: 1, label: "no"});
        edges.push({from: 0, to: 6, label: "yes"});
        edges.push({from: 0, to: 13});
        edges.push({from: 0, to: 11});
        edges.push({from: 1, to: 2});
        edges.push({from: 2, to: 3});
        edges.push({from: 2, to: 4});
        edges.push({from: 3, to: 5});
        edges.push({from: 1, to: 10});
        edges.push({from: 1, to: 7});
        edges.push({from: 2, to: 8});
        edges.push({from: 2, to: 9});
        edges.push({from: 3, to: 14});
        edges.push({from: 1, to: 12});
        // @ts-ignore
        nodes[0]["level"] = 0;
        // @ts-ignore
        nodes[1]["level"] = 1;
        // @ts-ignore
        nodes[2]["level"] = 3;
        // @ts-ignore

        nodes[3]["level"] = 4;
        // @ts-ignore
        nodes[4]["level"] = 4;
        // @ts-ignore
        nodes[5]["level"] = 5;
        // @ts-ignore
        nodes[6]["level"] = 1;
        // @ts-ignore
        nodes[7]["level"] = 2;
        // @ts-ignore
        nodes[8]["level"] = 4;
        // @ts-ignore
        nodes[9]["level"] = 4;
        // @ts-ignore
        nodes[10]["level"] = 2;
        // @ts-ignore
        nodes[11]["level"] = 1;
        // @ts-ignore
        nodes[12]["level"] = 2;
        // @ts-ignore
        nodes[13]["level"] = 1;
        // @ts-ignore
        nodes[14]["level"] = 5;

        // @ts-ignore
        this.network = new Network(this.appRef.current, {nodes, edges}, options);
    }

    render() {
        return (
                // @ts-ignore
                <div ref={this.appRef}/>
        );
    }
}