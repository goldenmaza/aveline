import { useFormComponentState } from '../../hooks/form';

export default function FormInputElement(props) {
    const { strong, maxLength, title, placeholder, remainingLength } = useFormComponentState();
    const {
        labelFor, strongClass, elementID, elementClass, elementType, elementLengthKey,
        labelStrongKey, elementTitleKey, elementPlaceholderKey,
        handleEventAction, autoComplete,
        spanClass, spanLengthKey
    } = props;

    return (
        <label htmlFor={labelFor}>
            <strong className={strongClass}>{strong[labelStrongKey]}</strong>
            <input id={elementID} className={elementClass} type={elementType} maxLength={maxLength[elementLengthKey]}
                   title={title[elementTitleKey]} placeholder={placeholder[elementPlaceholderKey]}
                   onKeyUp={handleEventAction} autoComplete={autoComplete} />
            <span className={spanClass}>{remainingLength[spanLengthKey]}</span>
        </label>
    );
}
