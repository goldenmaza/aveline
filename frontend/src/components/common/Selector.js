import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Content from './Content';
import Header from '../header/Header';
import Heading from './Heading';
import Home from '../home/Home';
import Form from '../form/Form';
import Footer from '../footer/Footer';

class Selector extends Component {
    render() {
        const { component, route, level, label } = this.props;
        if (!component) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const select = component.trim();
            return (
                <>
                    <Header />
                    <main className={select}>
                        <Heading hidden={true} level={level} label={label} />
                        {select === 'home' &&
                            <Home route={route} />
                        }
                        {select === 'form' &&
                            <Form route={route} minimalContact={false} />
                        }
                        {select === 'content' &&
                            <Content route={route} />
                        }
                        {select === 'invalid' &&
                            <section>
                                <div class='contentContainer'>
                                    <Heading hidden={false} level={'h1'} label={'Invalid - Heading Example'} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>
                                </div>
                            </section>
                        }
                    </main>
                    <Footer />
                </>
            );
        }
    }
}

const mapStateToProps = state => ({
    level: state.selectorComponent.level,
    label: state.selectorComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Selector));
