import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Heading from './Heading';

class Highlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null,
            content: null,
            multimedia: null,
            level: 'h3',
            label: 'Highlights navigation'
        };
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    page (hidden: false, box: true, main: true) {
                        id
                        tag
                        label
                        title
                    }
                    content (hidden: false, box: true) {
                        id
                        page
                        heading
                        text
                    }
                    multimedia (hidden: false, box: true) {
                        id
                        page
                        content
                        src
                        alt
                        title
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
                multimedia: result.data.multimedia,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { page, content, multimedia, level, label } = this.state;
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

export default Highlights;
