import React, { Component } from 'react';

import Region from './Region';
import Type from './Type';
import Model from './Model';
import Category from './Category';
import Item from './Item';

class BuildTool extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="BuildTool">
                <Region component="region">
                </Region>
                <Type component="type">
                </Type>
                <Model component="model">
                </Model>
                <Category component="category">
                </Category>
                <Item component="item">
                </Item>
            </div>
        );
    }
}

export default BuildTool;
