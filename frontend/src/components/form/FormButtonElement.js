import { useFormComponentState } from '../../hooks/form';

export default function FormButtonElement(props) {
    const { strong, title, placeholder } = useFormComponentState();
    const {
        labelFor, elementID, elementClass, elementType,
        labelStrongKey, elementTitleKey, elementPlaceholderKey,
        handleEventAction, elementDisabled
    } = props;

    return (
        <label htmlFor={labelFor}>
            <strong>{strong[labelStrongKey]}</strong>
            <input id={elementID} className={elementClass} type={elementType}
                   title={title[elementTitleKey]} value={placeholder[elementPlaceholderKey]}
                   onClick={handleEventAction} disabled={elementDisabled} />
        </label>
    );
}
