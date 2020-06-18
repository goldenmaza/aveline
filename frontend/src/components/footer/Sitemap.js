import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Heading from '../common/Heading';

class Sitemap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null,
            content: null,
            level: process.env.REACT_APP_DOC_FOOTER_SITEMAP_LEVEL,
            label: process.env.REACT_APP_DOC_FOOTER_SITEMAP_LABEL
        }
    }

    componentDidMount() {
        this.setState({
            loading: this.props.page !== null && this.props.page.length > 0 ? false : true,
            page: this.props.page,
            content: this.props.content
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { level, label, page, content } = this.state;
            const lists = [];
            let items = [];

            page.forEach(p => {
                if (p.sitemap) {
                    const p_label = p.label.toLowerCase().replace('å', 'a').replace('ä', 'a').replace('ö', 'o');
                    const to = '/p/' + p_label;
                    items.push(
                        <li key={'li' + p.id} className='bold'>
                            <NavLink to={to} title={p.title}>
                                {p.label}
                            </NavLink>
                        </li>
                    );
                    content.forEach(c => {
                        if (p.id === c.page) {
                            items.push(
                                <li key={c.id}>
                                    <HashLink to={to + '#' + p_label + c.id} title={c.heading}>
                                        {c.heading}
                                    </HashLink>
                                </li>
                            );
                        }
                    });
                    lists.push(
                        <ul key={'ul' + p.id}>
                            {items}
                        </ul>
                    );
                    items = [];
                }
            });

            return (
                <>
                    <nav className='sitemap_navigation'>
                        <Heading hidden={true} level={level} label={label} />
                        {lists}
                    </nav>
                </>
            );
        }
    }
}

export default Sitemap;
