import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { address } = this.props;
        const src = 'https://maps.google.com/maps?q=' + address + '&t=k&z=13&ie=UTF8&iwloc=&output=embed';
        return (
            <iframe src={src} tabIndex='-1'></iframe>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation));
