import { useEffect, useRef } from 'react';

import { useSliderComponentState } from '../../hooks/home';

import Slide from './Slide';

import {
    setSliderSources,
    setCurrentSlide,
    setIntervalId,
    clearIntervalId
} from '../../redux/actions/home';

export default function Slider(props) {
    const { loading, delay, duration, loop, current } = useSliderComponentState();
    const indexRef = useRef(0);

    useEffect(() => {
        if (props.sources !== null) {
            const sources = props.sources;
            setSliderSources({ sources });
        }

        setTimeout(() => {
            setIntervalId(setInterval(cycleSlides, duration));
        }, delay, duration);

        function cycleSlides() {
            const currentIndex = Number(indexRef.current);
            const sources = props.sources;
            const finalIndex = sources.length - 1;
            const newIndex = currentIndex === finalIndex ? 0 : currentIndex + 1;
            indexRef.current = newIndex;
            setCurrentSlide({ newIndex });
            if (!loop) {
                clearIntervalId();
            }
        }

        return () => {
            clearIntervalId();
        }
    }, []);

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        return (
            <>
                <Slide loading={loading} current={current}/>
            </>
        );
    }
}
