import React, { Component } from 'react';

import Slideshow from './Slideshow';
import Highlights from './Highlights';
import Form from '../form/Form';

class Home extends Component {
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
            return (<div></div>); // Refactor to display loading animation...minimalContact
        } else {
            return (
                <>
                    <Slideshow />
                    <Highlights />
                    <Form minimalContact={true} minimalForm={true} tag={this.props.tag} />
                </>
            );
        }
    }
}

export default Home;
