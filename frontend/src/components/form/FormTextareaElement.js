import { useFormComponentState } from '../../hooks/form';

export default function FormTextareaElement(props) {
    const { strong, maxLength, title, placeholder, remainingLength } = useFormComponentState();
    const {
        labelFor, strongClass, elementID, elementClass,
        labelStrongKey, elementLengthKey, elementTitleKey, elementPlaceholderKey,
        handleEventAction, autoComplete,
        spanClass, spanLengthKey
    } = props;

    return (
        <label htmlFor={labelFor}>
            <strong className={strongClass}>{strong[labelStrongKey]}</strong>
            <textarea id={elementID} className={elementClass} maxLength={maxLength[elementLengthKey]}
                      title={title[elementTitleKey]} placeholder={placeholder[elementPlaceholderKey]}
                      onKeyUp={handleEventAction} autoComplete={autoComplete}>
            </textarea>
            <span className={spanClass}>{remainingLength[spanLengthKey]}</span>
        </label>
    );
}
