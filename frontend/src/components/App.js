import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Heading from './common/Heading';
import Header from './common/Header';
import Section from './common/Section';
import Footer from './common/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 'h1',
            label: 'Aveline',
            tag: null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState({
                tag: this.props.location.pathname.split("/").pop()
            });
        }
    }

    render() {
        const { level, label } = this.state;
        return (
            <>
                <Heading hidden={true} level={level} label={label} />
                <Header />
                <Section tag={this.state.tag} />
                <Footer />
            </>
        );
    }
}

export default withRouter(props => <App {...props}/>);
