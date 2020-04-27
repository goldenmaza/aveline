import React, { Component } from 'react';

import Heading from './Heading';
import Container from './Container';
import Contact from './Contact';
import Navigation from './Navigation';
import Sitemap from './Sitemap';
import Brand from './Brand';
import Copyright from './Copyright';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            page: null,
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
                        ordering
                        label
                        title
                    }
                    multimedia (page: null) {
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
                multimedia: result.data.multimedia,
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { level, label, page, multimedia } = this.state;
            return (
                <footer>
                    <Heading hidden={true} level={level} label={label} />
                    <Container>
                        <img className="footer_logotype" src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                    </Container>
                    <Container>
                        <Container>
                            <Contact />
                            <Navigation />
                        </Container>
                        <Container>
                            <Sitemap page={page} />
                            <Brand />
                        </Container>
                    </Container>
                    <Container>
                        <Copyright />
                    </Container>
                </footer>
            );
        }
    }
}

export default Footer;
