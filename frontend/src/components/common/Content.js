import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from './Heading';
import Collage from './Collage';

import {
    getPageContent
} from '../../redux/actions/common';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.getPageContent();
    }

    render() {
        const { loading, page, content, multimedia, level, tag, children } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const sections = [];
            let collection = [];

            page.forEach(p => {
                content.forEach(c => {
                    if (p.id === c.page && p.tag === tag) {
                        const id = p.tag + c.id;
                        multimedia.forEach(m => {
                            if (m.content !== null && p.id === m.page && c.id === m.content) {
                                collection.push(m);
                            }
                        });
                        sections.push(
                            <section key={id}>
                                <div id={id} className='contentContainer'>
                                    <Heading level={level} label={c.heading} />
                                    <p>
                                        {c.text}
                                    </p>
                                    <Collage collection={collection} />
                                </div>
                                { children }
                            </section>
                        );
                    }
                    collection = [];
                });
            });

            if (sections.length === 0) { // Contact page specific
                page.forEach(p => {
                    if (p.tag === tag) {
                        const id = p.tag;
                        sections.push(
                            <section key={id}>
                                <div id={id} className='contentContainer'>
                                </div>
                                { children }
                            </section>
                        );
                    }
                });
            }

            return (
                <>
                    { sections }
                </>
            );
        }
    }
}

const mapStateToProps = state => ({
    loading: state.contentComponent.loading,
    page: state.contentComponent.page,
    content: state.contentComponent.content,
    multimedia: state.contentComponent.multimedia,
    level: state.contentComponent.level
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getPageContent
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Content));
