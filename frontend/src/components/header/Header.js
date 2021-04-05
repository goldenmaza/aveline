import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Handler from './Handler';

class Header extends Component {
    render() {
        const { level, label } = this.props;
        return (
            <header>
                <nav aria-label='main navigation'>
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

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header));
