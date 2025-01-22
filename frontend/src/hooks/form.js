import { useSelector } from 'react-redux';

export const useFormComponentState = () => {
    return useSelector(state => state.formComponent);
}

export const useHelpSectionComponentState = () => {
    return useSelector(state => state.helpSectionComponent);
}
