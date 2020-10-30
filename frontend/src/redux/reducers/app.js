import {
    appState
} from '../constants/app';

export const appComponent = (state = appState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
