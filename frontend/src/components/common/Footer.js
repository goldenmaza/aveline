import React, { Component } from 'react';

import Heading from './Heading';
import Contact from './Contact';
import Sitemap from './Sitemap';
import Copyright from './Copyright';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null,
            content: null,
            multimedia: null,
            level: 'h2',
            label: 'Footer content'
        }
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    page (hidden: false) {
                        id
                        main
                        sitemap
                        label
                        title
                    }
                    content (hidden: false) {
                        id
                        page
                        heading
                    }
                    multimedia (hidden: false, logo: true) {
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
            const { level, label, page, content, multimedia } = this.state;
            return (
                <footer>
                    <header>
                        <Heading hidden={true} level={level} label={label} />
                        <a href='/'>
                            <img className='footer_logotype' src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                        </a>
                    </header>
                    <div>
                        <div className='contact_minimal'>
                            <Contact minimalContact={true} tag={this.props.tag} />
                        </div>
                        <div>
                            <Sitemap page={page} content={content} />
                        </div>
                    </div>
                    <footer>
                        <Copyright />
                    </footer>
                </footer>
            );
        }
    }
}

export default Footer;
