import React, { Component } from 'react';

import Heading from './Heading';
import Handler from './Handler';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            level: process.env.REACT_APP_DOC_HEADER_LEVEL,
            label: process.env.REACT_APP_DOC_HEADER_LABEL
        };
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { level, label } = this.state;
            return (
                <header role='banner'>
                    <nav>
                        <Heading hidden={true} level={level} label={label} />
                        <Handler />
                    </nav>
                </header>
            );
        }
    }
}

export default Header;
