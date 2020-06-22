import React, { Component } from 'react';

import Slide from './Slide';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            intervalId: -1,
            index: props.index ? props.index : 0,
            current: props.sources ? props.sources[0] : null,
            sources: props.sources ? props.sources : null,
            start: props.start ? props.start : 0,
            duration: props.duration ? props.duration : 1000,
            loop: props.loop ? true : false
        };

        this.cycleSlides = this.cycleSlides.bind(this);
    }

    componentDidMount() {
        const { start, duration } = this.state;
        setTimeout(() => {
            const intervalId = setInterval(this.cycleSlides, duration);
            this.setState({
                loading: false,
                intervalId: intervalId
            });
        }, start, this, duration);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    cycleSlides() {
        const { index, sources, loop } = this.state;
        const limit = sources.length - 1;
        const i = limit === index ? 0 : index + 1;
        this.setState({
            index: i,
            current: sources[i]
        });
        if (!loop && sources.length === index) {
            clearInterval(this.state.intervalId);
        }
    }

    render() {
        if (this.state.loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
            const { current } = this.state;
            return (
                <>
                    {current !== null &&
                        <Slide current={current} />
                    }
                </>
            );
        }
    }
}

export default Slider;
