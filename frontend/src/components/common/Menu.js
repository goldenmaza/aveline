import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            toggled: false,
            active: 'active',
            page: null
        }

        this.toggleBar = this.toggleBar.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: this.props.page !== null && this.props.page.length > 0 ? false : true,
            page: this.props.page
        });
    }

    toggleBar() {
        const currentState = this.state.toggled;
        this.setState({
            toggled: !currentState
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { page, toggled, active } = this.state;
            const handler = toggled ? 'handler_navigation active' : 'handler_navigation';
            const items = [];

            page.forEach(p => {
                const to = '/p/' + p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
                items.push(
                    <li key={p.id}>
                        <NavLink to={to} activeClassName={active} onClick={this.toggleBar} title={p.title}>
                            {p.label}
                        </NavLink>
                    </li>
                );
            });

            return (
                <ul className={handler}>
                    {items}
                </ul>
            );
        }
    }
}

export default Menu;
