import React, { Component } from 'react';

import Content from './Content';
import Header from '../header/Header';
import Heading from './Heading';
import Home from './Home';
import Form from '../form/Form';
import Footer from '../footer/Footer';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            level: process.env.REACT_APP_DOC_SELECTOR_LEVEL,
            label: process.env.REACT_APP_DOC_SELECTOR_LABEL
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
            const { level, label } = this.state;
            const component = this.props.component.trim();
            return (
                <>
                    <Header />
                    <main className={component}>
                        <Heading hidden={true} level={level} label={label} />
                        {component === 'home' &&
                            <Home tag={this.props.tag} />
                        }
                        {component === 'form' &&
                            <Form tag={this.props.tag} />
                        }
                        {component === 'content' &&
                            <Content tag={this.props.tag} />
                        }
                    </main>
                    <Footer />
                </>
            );
        }
    }
}

export default Selector;
