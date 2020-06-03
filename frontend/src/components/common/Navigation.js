import React, { Component } from 'react';

import Heading from './Heading';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
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
            return (
                <iframe src={'https://maps.google.com/maps?q=' + this.props.address + '&t=k&z=13&ie=UTF8&iwloc=&output=embed'} tabIndex='-1'></iframe>
            );
        }
    }
}

export default Navigation;
