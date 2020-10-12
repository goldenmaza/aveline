import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    getHeaderMenu,
    toggleHandlerMenu
} from '../../redux/actions/header';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggleBar = this.toggleBar.bind(this);
    }

    componentDidMount() {
        this.props.actions.getHeaderMenu();
    }

    toggleBar() {
        this.props.actions.toggleHandlerMenu();
    }

    render() {
        const { loading, toggled, pages } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const handlerNavigation = toggled ? 'handler_navigation active' : 'handler_navigation';
            const items = [];

            pages.forEach(p => {
                const to = '/p/' + p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
                items.push(
                    <li key={p.id}>
                        <NavLink to={to} activeClassName={'active'} onClick={this.toggleBar} title={p.title}>
                            {p.label}
                        </NavLink>
                    </li>
                );
            });

            return (
                <ul className={handlerNavigation}>
                    {items}
                </ul>
            );
        }
    }
}

const mapStateToProps = state => ({
    loading: state.menuComponent.loading,
    toggled: state.menuComponent.toggled,
    pages: state.menuComponent.pages
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getHeaderMenu,
        toggleHandlerMenu
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu));
