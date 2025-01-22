import { useSelector } from 'react-redux';

export const useAppComponentState = () => {
    return useSelector(state => state.appComponent);
}
