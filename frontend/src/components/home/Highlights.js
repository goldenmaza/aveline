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
        const { loading, pages, level, label } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const highlights = [];

            pages.forEach(p => {
                const collage = p.collage;
                const to = '/p/' + p.route;
                collage.forEach(m => {
                    highlights.push(
                        <li key={p.id + m.id}>
                            <NavLink to={to} title={p.title}>
                                <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} />
                                <div>
                                    <span>{p.title}</span>
                                </div>
                            </NavLink>
                        </li>
                    );
                });
            });
            pages.forEach(p => {
                const paragraphs = p.paragraphs;
                const to = '/p/' + p.route;
                paragraphs.forEach(c => {
                    const collage = c.collage;
                    collage.forEach(m => {
                        highlights.push(
                            <li key={p.id + c.id + m.id}>
                                <HashLink to={to+'#'+p.route+c.id} title={c.text}>
                                    <img className='highlights_image' src={m.src} alt={m.alt} title={m.title} />
                                    <div>
                                        <span>{c.heading}</span>
                                    </div>
                                </HashLink>
                            </li>
                        );
                    });
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
    pages: state.highlightsComponent.pages,
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
