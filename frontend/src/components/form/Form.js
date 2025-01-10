import { useFormComponentState, useHelpSectionComponentState } from '../../hooks/form';

import { prepareHelpSection } from '../../utils/helpSectionGenerator';

import {
    processForm,
    clearHelpSection,
    toggleHelpSection,
    enableSubmitButton,
    disableSubmitButton,
    validationChange,
    validationReset
} from '../../redux/actions/form';

import Heading from '../common/Heading';
import FormInputElement from './FormInputElement';
import FormTextareaElement from './FormTextareaElement';
import FormButtonElement from './FormButtonElement';
import HelpSection from './HelpSection';

export default function Form() {
    const { validation, displayHelp, submitDisabled, level, label } = useFormComponentState();
    const { helpMapping, rangeMapping, symbolMapping } = useHelpSectionComponentState();

    function handleOnKeyUp(event) {
        const { id, value } = event.target;

        validationChange(id, value);

        if (formIsValid()) {
            enableSubmitButton();
        } else {
            disableSubmitButton();
        }
    }

    function formIsValid() {
        let valid = true;

        Object.values(validation).forEach(val => {
            if (val.length > 0) {
                valid = false;
            }
        });

        return valid;
    }

    function handleToggleHelpSection(event) {
        event.preventDefault();

        clearHelpSection();
        toggleHelpSection();

        prepareHelpSection({helpMapping, rangeMapping, symbolMapping});
    }

    function handleResetForm(event) {
        event.preventDefault();

        resetForm();
    }

    function handleSubmitForm(event) {
        event.preventDefault();

        processForm({});

        resetForm();
    }

    function resetForm() {
        document.getElementById('contactForm').reset();

        validationReset();
    }

    const forename = validation.forenameInput === 'invalid' ? 'invalid' : '';
    const surname = validation.surnameInput === 'invalid' ? 'invalid' : '';
    const address = validation.addressInput === 'invalid' ? 'invalid' : '';
    const phone = validation.phoneInput === 'invalid' ? 'invalid' : '';
    const email = validation.emailInput === 'invalid' ? 'invalid' : '';
    const purpose = validation.purposeInput === 'invalid' ? 'invalid' : '';
    const message = validation.messageInput === 'invalid' ? 'invalid' : '';
    return (
        <>
            <section>
                <Heading hidden={true} level={level} label={label} />
                <form id='contactForm' encType='application/x-www-form-urlencoded' method='POST' action='#' noValidate>
                    <div className='formBody'>
                        <div className='formGroup'>
                            <div className='formGroup'>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        { <FormInputElement labelFor={'forenameInput'} strongClass={'required'} elementID={'forenameInput'}
                                                            elementClass={forename} elementType={'text'} elementLengthKey={'forenameInput'}
                                                            labelStrongKey={'forenameInput'} elementTitleKey={'forenameInput'} elementPlaceholderKey={'forenameInput'}
                                                            handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                            spanClass={'forenameCounter'} spanLengthKey={'forenameInput'} /> }
                                    </div>
                                    <div className='formElement'>
                                        { <FormInputElement labelFor={'surnameInput'} strongClass={'required'} elementID={'surnameInput'}
                                                            elementClass={surname} elementType={'text'} elementLengthKey={'surnameInput'}
                                                            labelStrongKey={'surnameInput'} elementTitleKey={'surnameInput'} elementPlaceholderKey={'surnameInput'}
                                                            handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                            spanClass={'surnameCounter'} spanLengthKey={'surnameInput'} /> }
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        { <FormInputElement labelFor={'addressInput'} strongClass={'required'} elementID={'addressInput'}
                                                            elementClass={address} elementType={'text'} elementLengthKey={'addressInput'}
                                                            labelStrongKey={'addressInput'} elementTitleKey={'addressInput'} elementPlaceholderKey={'addressInput'}
                                                            handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                            spanClass={'addressCounter'} spanLengthKey={'addressInput'} /> }
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        { <FormInputElement labelFor={'phoneInput'} strongClass={'required'} elementID={'phoneInput'}
                                                            elementClass={phone} elementType={'tel'} elementLengthKey={'phoneInput'}
                                                            labelStrongKey={'phoneInput'} elementTitleKey={'phoneInput'} elementPlaceholderKey={'phoneInput'}
                                                            handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                            spanClass={'phoneCounter'} spanLengthKey={'phoneInput'} /> }
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        { <FormInputElement labelFor={'emailInput'} strongClass={'required'} elementID={'emailInput'}
                                                            elementClass={email} elementType={'email'} elementLengthKey={'emailInput'}
                                                            labelStrongKey={'emailInput'} elementTitleKey={'emailInput'} elementPlaceholderKey={'emailInput'}
                                                            handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                            spanClass={'emailCounter'} spanLengthKey={'emailInput'} /> }
                                    </div>
                                </div>
                            </div>
                            <div className='formGroup'>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        { <FormInputElement labelFor={'purposeInput'} strongClass={'required'} elementID={'purposeInput'}
                                                            elementClass={purpose} elementType={'text'} elementLengthKey={'purposeInput'}
                                                            labelStrongKey={'purposeInput'} elementTitleKey={'purposeInput'} elementPlaceholderKey={'purposeInput'}
                                                            handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                            spanClass={'purposeCounter'} spanLengthKey={'purposeInput'} /> }
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        { <FormTextareaElement labelFor={'messageInput'} strongClass={'required'}
                                                               elementID={'messageInput'} elementClass={message} labelStrongKey={'messageInput'}
                                                               elementLengthKey={'messageInput'} elementTitleKey={'messageInput'} elementPlaceholderKey={'messageInput'}
                                                               handleEventAction={handleOnKeyUp} autoComplete={'off'}
                                                               spanClass={'messageCounter'} spanLengthKey={'messageInput'} /> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='formGroup'>
                            <div className='formRow'>
                                <div className='formElement'>
                                    { <FormButtonElement labelFor={'clearButton'} elementID={'clearButton'} elementClass={'input'} elementType={'button'}
                                                         labelStrongKey={'clearButton'} elementTitleKey={'clearButton'} elementPlaceholderKey={'clearButton'}
                                                         elementDisabled={''} handleEventAction={handleResetForm} /> }
                                </div>
                                <div className='formElement'>
                                    { <FormButtonElement labelFor={'helpButton'} elementID={'helpButton'} elementClass={'input'} elementType={'button'}
                                                         labelStrongKey={'helpButton'} elementTitleKey={'helpButton'} elementPlaceholderKey={'helpButton'}
                                                         elementDisabled={''} handleEventAction={handleToggleHelpSection} /> }
                                </div>
                                <div className='formElement'>
                                    { <FormButtonElement labelFor={'submitButton'} elementID={'submitButton'} elementClass={'input'} elementType={'button'}
                                                         labelStrongKey={'submitButton'} elementTitleKey={'submitButton'} elementPlaceholderKey={'submitButton'}
                                                         elementDisabled={submitDisabled ? 'disabled' : ''} handleEventAction={handleSubmitForm} /> }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {displayHelp &&
                    <HelpSection />
                }
            </section>
        </>
    );
}
