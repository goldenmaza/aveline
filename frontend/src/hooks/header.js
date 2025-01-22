import { useSelector } from 'react-redux';

export const useHeaderComponentState = () => {
    return useSelector(state => state.headerComponent);
}

export const useHandlerComponentState = () => {
    return useSelector(state => state.handlerComponent);
}

export const useMenuComponentState = () => {
    return useSelector(state => state.menuComponent);
}
