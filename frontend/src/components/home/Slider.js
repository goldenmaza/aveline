import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Slide from './Slide';

import {
    setSliderConfigurations,
    setCurrentSlide,
    setIntervalId,
    clearIntervalId
} from '../../redux/actions/home';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.props.actions.setSliderConfigurations(props);

        this.cycleSlides = this.cycleSlides.bind(this);
    }

    componentDidMount() {
        const { delay, duration } = this.props;
        setTimeout(() => {
            const intervalId = setInterval(this.cycleSlides, duration);
            this.props.actions.setIntervalId(intervalId);
        }, delay, duration, this);
    }

    componentWillUnmount() {
        this.props.actions.clearIntervalId();
    }

    cycleSlides() {
        const { sources, index, loop } = this.props;
        const limit = sources.length - 1;
        const i = index === limit ? 0 : Number(index) + 1;
        this.props.actions.setCurrentSlide(i);
        if (!loop) {
            this.props.actions.clearIntervalId();
        }
    }

    render() {
        const { loading, current } = this.props;
        if (loading) {
            return (<div></div>); // Refactor to display loading animation...
        } else {
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

const mapStateToProps = state => ({
    current: state.sliderComponent.current,
    index: state.sliderComponent.index,
    delay: state.sliderComponent.delay,
    duration: state.sliderComponent.duration,
    loop: state.sliderComponent.loop
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        setSliderConfigurations,
        setCurrentSlide,
        clearIntervalId,
        setIntervalId
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Slider));
