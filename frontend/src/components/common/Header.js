import React, { Component } from 'react';

import Heading from './Heading';
import Handler from './Handler';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            level: 'h2',
            label: 'Main Navigation'
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
