import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import Menu from './Menu';

import {
    getHeaderLogo,
    toggleHandlerMenu
} from '../../redux/actions/header';

class Handler extends Component {
    constructor(props) {
        super(props);

        this.toggleBar = this.toggleBar.bind(this);
    }

    componentDidMount() {
        this.props.actions.getHeaderLogo();
    }

    toggleBar() {
        this.props.actions.toggleHandlerMenu();
    }

    render() {
        if (this.props.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { toggled, multimedia } = this.props;
            const handlerToggle = toggled ? 'handler_toggle active' : 'handler_toggle';
            return (
                <>
                    <div className='nav_container'>
                        <a href='/'>
                            <img className='nav_logotype' src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                        </a>
                        <div className={handlerToggle} onClick={this.toggleBar}>
                            <i></i><i></i><i></i>
                        </div>
                    </div>
                    <Menu />
                </>
            );
        }
    }
}

const mapStateToProps = state => ({
    loading: state.handlerComponent.loading,
    toggled: state.handlerComponent.toggled,
    multimedia: state.handlerComponent.multimedia
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getHeaderLogo,
        toggleHandlerMenu
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Handler));
