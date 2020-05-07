import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Heading from './Heading';

class Sitemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null,
            level: 'h3',
            label: 'Sitemap content'
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
            const { level, label, page } = this.state;
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
                <>
                    <Heading hidden={true} level={level} label={label} />
                    <nav>
                        <ul>
                            {items}
                        </ul>
                    </nav>
                </>
            );
        }
    }
}

export default Sitemap;
