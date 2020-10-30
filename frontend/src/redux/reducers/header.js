import {
    headerState,
    handlerState,
    menuState,
    REQ_HEADER_LOGO,
    RCV_HEADER_LOGO,
    ERR_HEADER_LOGO,
    REQ_HEADER_MENU,
    RCV_HEADER_MENU,
    ERR_HEADER_MENU,
    TOGGLE_MENU_HANDLER,
    TOGGLE_HEADER_MENU
} from '../constants/header';

export const headerComponent = (state = headerState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const handlerComponent = (state = handlerState, action) => {
    switch (action.type) {
        case TOGGLE_MENU_HANDLER:
            return {
                ...state,
                toggled: !state.toggled
            };
        case REQ_HEADER_LOGO:
            return {
                ...state,
                loading: true,
                collage: null
            };
        case RCV_HEADER_LOGO:
            return {
                ...state,
                loading: !state.loading,
                collage: action.result.data.collage
            };
        case ERR_HEADER_LOGO:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const menuComponent = (state = menuState, action) => {
    switch (action.type) {
        case TOGGLE_HEADER_MENU:
            return {
                ...state,
                toggled: !state.toggled
            };
        case REQ_HEADER_MENU:
            return {
                ...state,
                loading: true,
                pages: null
            };
        case RCV_HEADER_MENU:
            return {
                ...state,
                loading: !state.loading,
                pages: action.result.data.pages
            };
        case ERR_HEADER_MENU:
            return {
                ...state
            };
        default:
            return state;
    }
};
