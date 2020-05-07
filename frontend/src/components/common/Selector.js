import React, { Component } from 'react';

import Header from './Header';
import Home from './Home';
import Form from '../form/Form';
import Page from './Page';
import Footer from './Footer';

class Selector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const component = this.props.component.trim();
        return (
            <>
                <Header />
                {component === 'Home' &&
                    <Home tag={this.props.tag} />
                }
                {component === 'Form' &&
                    <Form tag={this.props.tag} />
                }
                {component === 'Page' &&
                    <Page tag={this.props.tag} />
                }
                <Footer />
            </>
        );
    }
}

export default Selector;
