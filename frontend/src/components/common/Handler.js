import React, { Component } from 'react';

import Menu from './Menu';

class Handler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            toggled: false,
            page: null,
            content: null,
            multimedia: null
        }

        this.toggleBar = this.toggleBar.bind(this);
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    page (hidden: false, main: true) {
                        id
                        label
                        title
                    }
                    content (hidden: false) {
                        id
                        page
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

    toggleBar() {
        this.setState(state => ({
            toggled: !state.toggled
        }));
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { toggled, page, content, multimedia } = this.state;
            const handler = toggled ? 'handler_toggle active' : 'handler_toggle';
            return (
                <>
                    <div className='nav_container'>
                        <a href='/'>
                            <img className='nav_logotype' src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                        </a>
                        <div className={handler} onClick={this.toggleBar}>
                            <i></i><i></i><i></i>
                        </div>
                    </div>
                    <Menu page={page} content={content} toggled={toggled} />
                </>
            );
        }
    }
}

export default Handler;
