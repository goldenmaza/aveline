import { useSelector } from 'react-redux';

export const usePageComponentState = () => {
    return useSelector(state => state.pageComponent);
}

export const useContentComponentState = () => {
    return useSelector(state => state.contentComponent);
}

export const useCollageComponentState = () => {
    return useSelector(state => state.collageComponent);
}

export const usePreventionComponentState = () => {
    return useSelector(state => state.preventionComponent);
}
