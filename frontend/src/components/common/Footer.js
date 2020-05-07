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
            multimedia: null,
            level: 'h2',
            label: 'Footer content',
            level_logo: 'h3',
            label_logo: 'Logotype content'
        }
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    page (hidden: false) {
                        id
                        main
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
            console.log(result);
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
            const { level, label, level_logo, label_logo, page, multimedia } = this.state;
            return (
                <footer>
                    <Heading hidden={true} level={level} label={label} />
                    <section>
                        <Heading hidden={true} level={level_logo} label={label_logo} />
                        <img className='footer_logotype' src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                    </section>
                    <div>
                        <section>
                            <Contact minimalContact={true} tag={this.props.tag} />
                        </section>
                        <section>
                            <Sitemap page={page} />
                        </section>
                    </div>
                    <section>
                        <Copyright />
                    </section>
                </footer>
            );
        }
    }
}

export default Footer;
