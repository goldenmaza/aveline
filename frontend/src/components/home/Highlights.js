import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Dispatch, bindActionCreators } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';

import {
    getHighlights
} from '../../redux/actions/home';

class Highlights extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getHighlights();
    }

    render() {
        const { loading, page, content, multimedia, level, label } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const highlights = [];

            page.forEach(p => {
                const to = '/p/' + p.tag;
                multimedia.forEach(m => {
                    if (p.id === m.page) {
                        highlights.push(
                            <li key={p.id + m.id}>
                                <NavLink to={to} title={p.title}>
                                    <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} />
                                    <div>
                                        <span>
                                            {p.title}
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    }
                });
            });
            page.forEach(p => {
                const to = '/p/' + p.tag;
                content.forEach(c => {
                    if (p.id === c.page) {
                        multimedia.forEach(m => {
                            if (c.id === m.content) {
                                highlights.push(
                                    <li key={p.id + c.id + m.id}>
                                        <HashLink to={to+'#'+p.tag+c.id} title={c.text}>
                                            <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} />
                                            <div>
                                                <span>
                                                    {c.heading}
                                                </span>
                                            </div>
                                        </HashLink>
                                    </li>
                                );
                            }
                        });
                    }
                });
            });

            return (
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <nav>
                        <ul className='highlights_navigation'>
                            { highlights }
                        </ul>
                    </nav>
                </section>
            );
        }
    }
}

const mapStateToProps = state => ({
    loading: state.highlightsComponent.loading,
    page: state.highlightsComponent.page,
    content: state.highlightsComponent.content,
    multimedia: state.highlightsComponent.multimedia,
    level: state.highlightsComponent.level,
    label: state.highlightsComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getHighlights
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Highlights));
