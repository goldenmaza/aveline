import React, { Component } from 'react';

class Slide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { current } = this.props;
        if (current != null) {
            return (
                <img src={current.src} alt={current.alt} title={current.title} />
            );
        } else {
            return null;
        }
    }
}

export default Slide;
