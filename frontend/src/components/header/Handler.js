import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
        const { loading, toggled, collage } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const handlerToggle = toggled ? 'handler_toggle active' : 'handler_toggle';
            return (
                <>
                    <div className='nav_container'>
                        <a href='/'>
                            <img className='nav_logotype' src={collage[0].src} alt={collage[0].alt} title={collage[0].title} />
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
    collage: state.handlerComponent.collage
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getHeaderLogo,
        toggleHandlerMenu
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Handler));
