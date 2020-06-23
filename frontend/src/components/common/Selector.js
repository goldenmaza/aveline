import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Content from './Content';
import Header from '../header/Header';
import Heading from './Heading';
import Home from '../home/Home';
import Form from '../form/Form';
import Footer from '../footer/Footer';

class Selector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { component, tag, level, label } = this.props;
        const select = component.trim();
        return (
            <>
                <Header />
                <main className={select}>
                    <Heading hidden={true} level={level} label={label} />
                    {select === 'home' &&
                        <Home tag={tag} />
                    }
                    {select === 'form' &&
                        <Form tag={tag} />
                    }
                    {select === 'content' &&
                        <Content tag={tag} />
                    }
                </main>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => ({
    level: state.selectorComponent.level,
    label: state.selectorComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Selector));
