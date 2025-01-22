import { useSelector } from 'react-redux';

export const useFooterComponentState = () => {
    return useSelector(state => state.footerComponent);
}

export const useSitemapComponentState = () => {
    return useSelector(state => state.sitemapComponent);
}

export const useCopyrightComponentState = () => {
    return useSelector(state => state.copyrightComponent);
}
