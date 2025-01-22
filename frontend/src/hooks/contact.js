import { useSelector } from 'react-redux';

export const useContactComponentState = () => {
    return useSelector(state => state.contactComponent);
}
