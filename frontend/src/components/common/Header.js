import React, { Component } from 'react';

import Heading from './Heading';
import Handler from './Handler';
import Menu from './Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            level: 'h2',
            label: 'Main Navigation',
            page: null
        };
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
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { level, label, page } = this.state;
            return (
                <header role="banner">
                    <nav>
                        <Heading hidden={true} level={level} label={label} />
                        <Handler />
                        <Menu page={page} />
                    </nav>
                </header>
            );
        }
    }
}

export default Header;
