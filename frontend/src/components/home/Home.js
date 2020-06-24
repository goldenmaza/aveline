import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Slideshow from './Slideshow';
import Highlights from './Highlights';
import Form from '../form/Form';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Slideshow />
                <Highlights />
                <Form minimalContact={true} minimalForm={true} tag={this.props.tag} />
            </>
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
)(Home));
