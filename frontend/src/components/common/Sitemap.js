import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sitemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null
        }
    }

    componentDidMount() {
        this.setState({
            loading: this.props.page !== null && this.props.page.length > 0 ? false : true,
            page: this.props.page
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const page = this.state.page;
            const items = [];

            page.forEach(p => {
                const to = '/p/' + p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
                items.push(
                    <li key={p.id}>
                        <NavLink to={to} title={p.title}>
                            {p.label}
                        </NavLink>
                    </li>
                );
            });

            return (
                <ul>
                    {items}
                </ul>
            );
        }
    }
}

export default Sitemap;
