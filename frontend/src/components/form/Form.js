import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';
import Contact from '../contact/Contact';
import FormHelp from './HelpSection';

import {
    processForm,
    toggleHelpSection,
    enableSubmitButton,
    disableSubmitButton,
    validationChange,
    validationReset
} from '../../redux/actions/form';

class Form extends Component {
    constructor(props) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);
        this.clearButton = this.clearButton.bind(this);
        this.helpButton = this.helpButton.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    onKeyUp(event) {
        const { id, value } = event.target;

        this.props.actions.validationChange(id, value);
    }

    clearButton(event) {
        event.preventDefault();

        this.resetForm();
    }

    helpButton(event) {
        event.preventDefault();

        this.props.actions.toggleHelpSection();
    }

    submitButton(event) {
        event.preventDefault();

        this.props.actions.processForm(this.props);
    }

    onChange() {
        if (this.formIsValid()) {
            this.props.actions.enableSubmitButton();
        } else {
            this.props.actions.disableSubmitButton();
        }
    }

    formIsValid() {
        let valid = true;

        Object.values(this.props.validation).forEach(val => {
            if (val.length > 0) {
                valid = false;
            }
        });

        return valid;
    }

    resetForm() {
        document.getElementById('contactForm').reset();
        this.props.actions.validationReset();
    }

    componentDidUpdate() {
        this.onChange();
    }

    render() {
        const {
            strong, maxLength, remainingLength, title, placeholder, validation, displayHelp, submitDisabled,
            level, label, minimalContact, route
        } = this.props;
        const forename = validation.forenameInput === 'invalid' ? 'invalid' : '';
        const surname = validation.surnameInput === 'invalid' ? 'invalid' : '';
        const address = validation.addressInput === 'invalid' ? 'invalid' : '';
        const phone = validation.phoneInput === 'invalid' ? 'invalid' : '';
        const email = validation.emailInput === 'invalid' ? 'invalid' : '';
        const purpose = validation.purposeInput === 'invalid' ? 'invalid' : '';
        const message = validation.messageInput === 'invalid' ? 'invalid' : '';
        return (
            <>
                {!minimalContact &&
                    <Contact minimalContact={minimalContact} route={route} />
                }
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <form id='contactForm' encType='application/x-www-form-urlencoded' method='POST' action='#' noValidate>
                        <div className='formBody'>
                            <div className='formGroup'>
                                <div className='formGroup'>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='forenameInput'>
                                                <strong className='required'>{strong['forenameInput']}</strong>
                                                <input id='forenameInput' className={forename} type='text'
                                                    maxLength={maxLength['forenameInput']} title={title['forenameInput']} placeholder={placeholder['forenameInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" />
                                                <span className='forenameCounter'>{remainingLength['forenameInput']}</span>
                                            </label>
                                        </div>
                                        <div className='formElement'>
                                            <label htmlFor='surnameInput'>
                                                <strong className='required'>{strong['surnameInput']}</strong>
                                                <input id='surnameInput' className={surname} type='text'
                                                    maxLength={maxLength['surnameInput']} title={title['surnameInput']} placeholder={placeholder['surnameInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" />
                                                <span className='surnameCounter'>{remainingLength['surnameInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='addressInput'>
                                                <strong className='required'>{strong['addressInput']}</strong>
                                                <input id='addressInput' className={address} type='text'
                                                    maxLength={maxLength['addressInput']} title={title['addressInput']} placeholder={placeholder['addressInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" />
                                                <span className='addressCounter'>{remainingLength['addressInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='phoneInput'>
                                                <strong className='required'>{strong['phoneInput']}</strong>
                                                <input id='phoneInput' className={phone} type='tel'
                                                    maxLength={maxLength['phoneInput']} title={title['phoneInput']} placeholder={placeholder['phoneInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" />
                                                <span className='phoneCounter'>{remainingLength['phoneInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='emailInput'>
                                                <strong className='required'>{strong['emailInput']}</strong>
                                                <input id='emailInput' className={email} type='email'
                                                    maxLength={maxLength['emailInput']} title={title['emailInput']} placeholder={placeholder['emailInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" />
                                                <span className='emailCounter'>{remainingLength['emailInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='formGroup'>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='purposeInput'>
                                                <strong className='required'>{strong['purposeInput']}</strong>
                                                <input id='purposeInput' className={purpose} type='text'
                                                    maxLength={maxLength['purposeInput']} title={title['purposeInput']} placeholder={placeholder['purposeInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" />
                                                <span className='purposeCounter'>{remainingLength['purposeInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='messageInput'>
                                                <strong className='required'>{strong['messageInput']}</strong>
                                                <textarea id='messageInput' className={message}
                                                    maxLength={maxLength['messageInput']} title={title['messageInput']} placeholder={placeholder['messageInput']}
                                                    onKeyUp={this.onKeyUp} autoComplete="off" >
                                                </textarea>
                                                <span className='messageCounter'>{remainingLength['messageInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='formGroup'>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='clearButton'>
                                            <strong>{strong['clearButton']}</strong>
                                            <input id='clearButton' className='input' type='button'
                                                title={title['clearButton']} value={placeholder['clearButton']}
                                                onClick={this.clearButton} />
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='helpButton'>
                                            <strong>{strong['helpButton']}</strong>
                                            <input id='helpButton' className='input' type='button'
                                                title={title['helpButton']} value={placeholder['helpButton']}
                                                onClick={this.helpButton} />
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='submitButton'>
                                            <strong>{strong['submitButton']}</strong>
                                            <input id='submitButton' className='input' type='button'
                                                title={title['submitButton']} value={placeholder['submitButton']}
                                                disabled={submitDisabled ? 'disabled' : ''} onClick={this.submitButton} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {displayHelp &&
                        <FormHelp />
                    }
                </section>
            </>
        );
    }
}

const mapStateToProps = state => ({
    input: state.formComponent.input,
    strong: state.formComponent.strong,
    regex: state.formComponent.regex,
    maxLength: state.formComponent.maxLength,
    remainingLength: state.formComponent.remainingLength,
    title: state.formComponent.title,
    placeholder: state.formComponent.placeholder,
    validation: state.formComponent.validation,
    displayHelp: state.formComponent.displayHelp,
    submitDisabled: state.formComponent.submitDisabled,
    level: state.formComponent.level,
    label: state.formComponent.label
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        processForm,
        toggleHelpSection,
        enableSubmitButton,
        disableSubmitButton,
        validationChange,
        validationReset
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Form));
