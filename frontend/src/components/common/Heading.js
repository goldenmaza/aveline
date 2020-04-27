import React, { Component } from 'react';

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowedLevels: ['h1', 'h2', 'h3', 'h4']
        };
    }

    render() {
        const { level, label, hidden } = this.props;
        const Level = this.state.allowedLevels.includes(level) ? level : 'p';
        return (
            <Level className={hidden ? 'hidden' : ''}>
                {label}
            </Level>
        );
    }
}

export default Heading;
