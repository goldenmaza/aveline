import React, { Component, Fragment } from 'react';

import Heading from './Heading';
import Content from './Content';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Heading>
                </Heading>
                <Content>
                </Content>
            </Fragment>
        );
    }
}

export default Section;
