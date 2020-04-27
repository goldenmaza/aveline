import React, { Component } from 'react';

import Heading from './Heading';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null,
            content: null,
            level_a: 'h3',
            level_b: 'h4'
        };
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    page (hidden: false) {
                        id
                        tag
                    }
                    content (hidden: false) {
                        id
                        page
                        ordering
                        heading
                        text
                    }
                }
            `
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };
        fetch('http://localhost:6969/api', options).then(promise => {
            return promise.json();
        }).then(result => {
            this.setState({
                page: result.data.page,
                content: result.data.content,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { level_a, level_b, page, content } = this.state;
            const { tag } = this.props;
            const sections = [];

            page.forEach(p => {
                content.forEach(c => {
                    if (p.id === c.page && p.tag === tag) {
                        sections.push(
                            <section key={p.tag + c.id}>
                                <Heading level={level_a} label={c.heading} />
                                <p>
                                    {c.text}
                                </p>
                            </section>
                        );
                    }
                });
            });

            return (
                <>
                    { sections }
                </>
            );
        }
    }
}

export default Content;
