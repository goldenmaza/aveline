import React, { Component } from 'react';

import Heading from '../common/Heading';
import Slider from './Slider';

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            multimedia: null,
            index: 0,
            start: 0,
            duration: 3000,
            loop: true,
            level: 'h3',
            label: 'Slideshow content'
        };
    }

    componentDidMount() {
        const requestBody = {
            query: `
                query {
                    multimedia (hidden: false, slideshow: true) {
                        id
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

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { multimedia, index, start, duration, loop, level, label } = this.state;
            const sources = [];

            multimedia.forEach(m => {
                sources.push({
                    id: m.id,
                    src: m.src,
                    alt: m.alt,
                    title: m.title
                });
            });

            return (
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    {sources.length > 0 &&
                        <Slider index={index} sources={sources} start={start} duration={duration} loop={loop} />
                    }
                </section>
            );
        }
    }
}

export default Slideshow;
