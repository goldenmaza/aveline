import { AnyAction } from 'redux';
import {
    appState
} from '../constants/app';

export const appComponent = (state = appState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};
