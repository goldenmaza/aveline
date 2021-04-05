import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
    render() {
        const { address } = this.props;
        if (!address) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const src = 'https://maps.google.com/maps?q=' + address + '&t=k&z=13&ie=UTF8&iwloc=&output=embed';
            return (
                <iframe src={src} tabIndex='-1' title='Navigational map to find our address...'></iframe>
            );
        }
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation));
