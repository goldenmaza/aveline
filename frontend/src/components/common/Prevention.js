import React, { Component } from 'react';

import Heading from './Heading';

class Prevention extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: process.env.REACT_APP_DOC_E404_LEVEL,
            label: process.env.REACT_APP_DOC_E404_LABEL
        };
    }

    render() {
        const { level, label } = this.state;
        return (
            <section>
                <Heading hidden={false} level={level} label={label} />
            </section>
        );
    }
}

export default Prevention;
