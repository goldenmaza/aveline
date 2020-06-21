import React, { Component } from 'react';

class Heading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const allowedLevels = ['h1', 'h2', 'h3', 'h4'];
        const { level, label, hidden } = this.props;
        const Level = allowedLevels.includes(level) ? level : 'p';
        return (
            <Level className={hidden ? 'hidden' : ''}>
                {label}
            </Level>
        );
    }
}

export default Heading;
