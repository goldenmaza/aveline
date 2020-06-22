import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Heading from '../common/Heading';

import {
    getFooterSitemap
} from '../../redux/actions/footer';

class Sitemap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getFooterSitemap();
    }

    render() {
        const { loading, page, content, level, label } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
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

const mapStateToProps = state => ({
    loading: state.sitemapComponent.loading,
    page: state.sitemapComponent.page,
    content: state.sitemapComponent.content,
    level: state.sitemapComponent.level,
    label: state.sitemapComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getFooterSitemap
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sitemap));
