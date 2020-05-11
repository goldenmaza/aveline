import React, { Component } from 'react';

import Heading from './Heading';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            level: 'h4',
            label: 'Navigation details'
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
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.4819893762424!2d11.888296816003976!3d57.62329098109472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fed53e5a8e953%3A0x9a4d64a12c5ef205!2sNorra%20Breviksv%C3%A4gen%2027%2C%20421%2067%20V%C3%A4stra%20Fr%C3%B6lunda!5e0!3m2!1ssv!2sse!4v1588340868307!5m2!1ssv!2sse"></iframe>
                </section>
            );
        }
    }
}

export default Navigation;
