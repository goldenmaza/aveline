import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import Heading from '../common/Heading';
import Handler from './Handler';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { level, label } = this.props;
        return (
            <header role='banner'>
                <nav>
                    <Heading hidden={true} level={level} label={label} />
                    <Handler />
                </nav>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    level: state.headerComponent.level,
    label: state.headerComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header));
