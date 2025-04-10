import { homeConstant } from '../../utils/importConstantsUtil';
import {
    SLIDESHOW_LEVEL,
    SLIDESHOW_LABEL,
    SLIDER_INDEX,
    SLIDER_DELAY,
    SLIDER_DURATION,
    SLIDER_LOOP,
    HIGHLIGHTS_LEVEL,
    HIGHLIGHTS_LABEL
} from '../../utils/constants/homeKeys';

export const slideshowState = {
    loading: true,
    collage: null,
    level: homeConstant(SLIDESHOW_LEVEL),
    label: homeConstant(SLIDESHOW_LABEL)
};

export const sliderState = {
    loading: true,
    sources: null,
    current: null,
    index: homeConstant(SLIDER_INDEX),
    delay: homeConstant(SLIDER_DELAY),
    duration: homeConstant(SLIDER_DURATION),
    loop: homeConstant(SLIDER_LOOP),
    intervalId: -1
};

export const highlightsState = {
    loading: true,
    pages: null,
    level: homeConstant(HIGHLIGHTS_LEVEL),
    label: homeConstant(HIGHLIGHTS_LABEL)
};

export const REQ_HOME_SLIDESHOW = 'REQ_HOME_SLIDESHOW';
export const RCV_HOME_SLIDESHOW = 'RCV_HOME_SLIDESHOW';
export const ERR_HOME_SLIDESHOW = 'ERR_HOME_SLIDESHOW';
export const SET_SLIDER_INTERVAL = 'SET_SLIDER_INTERVAL';
export const CLEAR_SLIDER_INTERVAL = 'CLEAR_SLIDER_INTERVAL';
export const SET_SLIDER_SOURCES = 'SET_SLIDER_SOURCES';
export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE';
export const SET_SLIDER_CONFIGURATIONS = 'SET_SLIDER_CONFIGURATIONS';

export const REQ_HOME_HIGHLIGHTS = 'REQ_HOME_HIGHLIGHTS';
export const RCV_HOME_HIGHLIGHTS = 'RCV_HOME_HIGHLIGHTS';
export const ERR_HOME_HIGHLIGHTS = 'ERR_HOME_HIGHLIGHTS';
