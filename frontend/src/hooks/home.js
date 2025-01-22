import { useSelector } from 'react-redux';

export const useSlideshowComponentState = () => {
    return useSelector(state => state.slideshowComponent);
}

export const useSliderComponentState = () => {
    return useSelector(store => store.sliderComponent);
}

export const useSlideComponentState = () => {
    return useSelector(state => state.slideComponent);
}

export const useHighlightsComponentState = () => {
    return useSelector(state => state.highlightsComponent);
}
