import React, { Component } from 'react';

import Heading from './Heading';
import Slideshow from '../slideshow/Slideshow';
import Highlights from './Highlights';
import Form from '../form/Form';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h2',
            label: 'Home content'
        };
    }

    render() {
        const { level, label } = this.state;
        return (
            <>
                <Heading hidden={true} level={level} label={label} />
                <Slideshow />
                <Highlights />
                <Form minimalContact={true} minimalForm={true} tag={this.props.tag} />
            </>
        );
    }
}

export default Home;
