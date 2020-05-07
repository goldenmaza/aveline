import React, { Component } from 'react';

import Heading from './Heading';

class Prevention extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h2',
            label: '404 - Invalid action'
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
