import React, { Component } from 'react';
import SVGInline from "react-svg-inline";
import Laptop from "../images/laptop3d.svg";

export class Isometric extends Component {
    render() {
        return (
            <div>
                <SVGInline svg={ Laptop }/>
            </div>
        )
    }
}

export default Isometric
