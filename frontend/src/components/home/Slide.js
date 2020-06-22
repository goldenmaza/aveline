import React, { Component } from 'react';

class Slide extends Component {
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
                <img src={this.props.current.src} alt={this.props.current.alt} title={this.props.current.title} />
            );
        }
    }
}

export default Slide;
