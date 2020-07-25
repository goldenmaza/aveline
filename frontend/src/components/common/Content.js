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

        this.iterateParagraphs = this.iterateParagraphs.bind(this);
        this.hasNestingParagraphs = this.hasNestingParagraphs.bind(this);
    }

    componentDidMount() {
        this.props.actions.getPageContent();
    }

    iterateParagraphs(level, route, paragraph) {
        const id = route + 'p' + paragraph.id;
        const collage = paragraph.collage;
        const key = this.hasNestingParagraphs(paragraph);
        const subLevel = level.slice(0, 1) + (parseInt(level.slice(level.length - 1)) + 1);

        return (
            <div key={id} className='contentContainer'>
                <Heading level={level} label={paragraph.heading} />
                <p>{paragraph.text}</p>
                {collage !== undefined && collage !== null &&
                    <Collage collection={collage.slice()} />
                }
                {paragraph[key] !== undefined &&
                    paragraph[key].map((p, k) => (this.iterateParagraphs(subLevel, route, p)))
                }
            </div>
        );
    }

    hasNestingParagraphs(content) {
        const p = 'paragraph';
        const keys = Object.keys(content);
        const key = keys.find(key => key.toLowerCase().includes(p));

        return key;
    }

    render() {
        const { loading, page, level, route, children } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const sections = [];

            page.forEach(p => {
                if (p.route === route) { // Verify which page, route, the user has chosen to view...
                    const paragraphs = p.paragraphs;
                    paragraphs.forEach(c => {
                        const id = p.route + c.id;
                        sections.push(
                            <section key={id}>
                                { this.iterateParagraphs(level, p.route, c) }
                                { children }
                            </section>
                        );
                    });
                }
            });

            if (sections.length === 0) { // Contact page specific
                page.forEach(p => {
                    if (p.route === route) {
                        const id = p.route;
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
