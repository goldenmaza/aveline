import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './Heading';

class Prevention extends Component {
    constructor(props) {
        super(props);
    }

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Prevention));
