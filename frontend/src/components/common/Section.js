import React, { Component } from 'react';

import Heading from './Heading';
import Content from './Content';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h2',
            label: 'Page content'
        };
    }

    render() {
        const { level, label } = this.state;
        const { tag } = this.props;
        return (
            <section>
                <Heading hidden={true} level={level} label={label} />
                <Content tag={tag} />
            </section>
        );
    }
}

export default Section;
