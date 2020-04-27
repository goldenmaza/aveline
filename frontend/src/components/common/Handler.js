import React, { Component } from 'react';

class Handler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            toggled: false,
            multimedia: null
        }

        this.toggleBar = this.toggleBar.bind(this);
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
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
                multimedia: result.data.multimedia,
                loading: false
            });
        });
    }

    toggleBar() {
        const currentState = this.state.active;
        this.setState({
            toggled: !currentState
        });
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { toggled, multimedia } = this.state;
            const handler = toggled ? 'handler_toggle active' : "handler_toggle";
            return (
                <div className="top_navigation">
                    <img className="nav_logotype" src={multimedia[0].src} alt={multimedia[0].alt} title={multimedia[0].title} />
                    <div className={handler} onClick={this.toggleBar}>
                        <i></i><i></i><i></i>
                    </div>
                </div>
            );
        }
    }
}

export default Handler;
