import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './Heading';

class Prevention extends Component {
    render() {
        const { level, label } = this.props;
        return (
            <section>
                <Heading hidden={false} level={level} label={label} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    level: state.preventionComponent.level,
    label: state.preventionComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Prevention));
