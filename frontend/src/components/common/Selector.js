import React, { Component } from 'react';

import Content from './Content';
import Header from './Header';
import Heading from './Heading';
import Home from './Home';
import Form from '../form/Form';
import Footer from './Footer';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            level: 'h2',
            label: 'Page content'
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
                    <main>
                        <Heading hidden={true} level={level} label={label} />
                        {component === 'Home' &&
                            <Home tag={this.props.tag} />
                        }
                        {component === 'Form' &&
                            <Form tag={this.props.tag} />
                        }
                        {component === 'Content' &&
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
