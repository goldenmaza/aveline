import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            toggle: false,
            active: 'active',
            page: null,
            content: null
        }

        this.toggleBar = this.toggleBar.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: this.props.page !== null && this.props.page.length > 0 ? false : true,
            toggle: this.props.toggled,
            page: this.props.page,
            content: this.props.content
        });
    }

    toggleBar() {
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { toggle, active, page, content } = this.state;
            const toggled = this.props.toggled === toggle ? toggle : this.props.toggled;
            const handler = toggled ? 'handler_navigation active' : 'handler_navigation';
            const items = [];

            page.forEach(p => {
                if (content.some(c => c.page === p.id)) {
                    const to = '/p/' + p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
                    items.push(
                        <li key={p.id}>
                            <NavLink to={to} activeClassName={active} onClick={this.toggleBar} title={p.title}>
                                {p.label}
                            </NavLink>
                        </li>
                    );
                }
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
