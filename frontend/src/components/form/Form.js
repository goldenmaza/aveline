import React, { Component } from 'react';
import axios from 'axios';

import Heading from '../common/Heading';
import Contact from '../contact/Contact';
import FormHelp from './FormHelp';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forenameInput: null,
            surnameInput: null,
            addressInput: null,
            phoneInput: null,
            emailInput: null,
            purposeInput: null,
            messageInput: null,
            strong: { // Refactor to a central utility...
                forenameInput: process.env.REACT_APP_DOC_FORM_STRONG_FORENAME,
                surnameInput: process.env.REACT_APP_DOC_FORM_STRONG_SURNAME,
                addressInput: process.env.REACT_APP_DOC_FORM_STRONG_ADDRESS,
                phoneInput: process.env.REACT_APP_DOC_FORM_STRONG_PHONE,
                emailInput: process.env.REACT_APP_DOC_FORM_STRONG_EMAIL,
                purposeInput: process.env.REACT_APP_DOC_FORM_STRONG_PURPOSE,
                messageInput: process.env.REACT_APP_DOC_FORM_STRONG_MESSAGE,
                clearButton: process.env.REACT_APP_DOC_FORM_STRONG_CLEAR,
                helpButton: process.env.REACT_APP_DOC_FORM_STRONG_HELP,
                submitButton: process.env.REACT_APP_DOC_FORM_STRONG_SUBMIT
            },
            regex: { // Refactor to a central utility...
                forenameInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_FORENAME),
                surnameInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_SURNAME),
                addressInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_ADDRESS),
                phoneInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_PHONE),
                emailInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL),
                purposeInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_PURPOSE),
                messageInput: RegExp(process.env.REACT_APP_DOC_FORM_REGEX_MESSAGE)
            },
            maxLength: { // Refactor to a central utility...
                forenameInput: process.env.REACT_APP_DOC_FORM_REGEX_FORENAME_MAX,
                surnameInput: process.env.REACT_APP_DOC_FORM_REGEX_SURNAME_MAX,
                addressInput: process.env.REACT_APP_DOC_FORM_REGEX_ADDRESS_MAX,
                phoneInput: process.env.REACT_APP_DOC_FORM_REGEX_PHONE_MAX,
                emailInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL_USERNAME_MAX)
                            + parseInt(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL_DOMAIN_MAX)
                            + parseInt(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL_SUFFIX_MAX),
                purposeInput: process.env.REACT_APP_DOC_FORM_REGEX_PURPOSE_MAX,
                messageInput: process.env.REACT_APP_DOC_FORM_REGEX_MESSAGE_MAX
            },
            remainingLength: { // Refactor to a central utility...
                forenameInput: 0,
                surnameInput: 0,
                addressInput: 0,
                phoneInput: 0,
                emailInput: 0,
                purposeInput: 0,
                messageInput: 0
            },
            title: { // Refactor to a central utility...
                forenameInput: process.env.REACT_APP_DOC_FORM_TITLE_FORENAME,
                surnameInput: process.env.REACT_APP_DOC_FORM_TITLE_SURNAME,
                addressInput: process.env.REACT_APP_DOC_FORM_TITLE_ADDRESS,
                phoneInput: process.env.REACT_APP_DOC_FORM_TITLE_PHONE,
                emailInput: process.env.REACT_APP_DOC_FORM_TITLE_EMAIL,
                purposeInput: process.env.REACT_APP_DOC_FORM_TITLE_PURPOSE,
                messageInput: process.env.REACT_APP_DOC_FORM_TITLE_MESSAGE,
                clearButton: process.env.REACT_APP_DOC_FORM_TITLE_CLEAR,
                helpButton: process.env.REACT_APP_DOC_FORM_TITLE_HELP,
                submitButton: process.env.REACT_APP_DOC_FORM_TITLE_SUBMIT
            },
            placeholder: { // Refactor to a central utility...
                forenameInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_FORENAME,
                surnameInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_SURNAME,
                addressInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_ADDRESS,
                phoneInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_PHONE,
                emailInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_EMAIL,
                purposeInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_PURPOSE,
                messageInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_MESSAGE,
                clearButton: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_CLEAR,
                helpButton: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_HELP,
                submitButton: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_SUBMIT
            },
            validation: { // Refactor to a central utility...
                forenameInput: '?',
                surnameInput: '?',
                addressInput: '?',
                phoneInput: '?',
                emailInput: '?',
                purposeInput: '?',
                messageInput: '?'
            },
            displayHelp: false,
            submitDisabled: true,
            level: process.env.REACT_APP_DOC_FORM_LEVEL,
            label: process.env.REACT_APP_DOC_FORM_LABEL
        };

        this.onKeyUp = this.onKeyUp.bind(this);
        this.clearButton = this.clearButton.bind(this);
        this.helpButton = this.helpButton.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    onKeyUp(event) {
        const { regex } = this.state;
        const { id, value } = event.target;

        switch (id) {
            case 'forenameInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        forenameInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        forenameInput: prevState.maxLength.forenameInput - value.length
                    }
                }), this.onChange);
                break;
            case 'surnameInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        surnameInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        surnameInput: prevState.maxLength.surnameInput - value.length
                    }
                }), this.onChange);
                break;
            case 'addressInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        addressInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        addressInput: prevState.maxLength.addressInput - value.length
                    }
                }), this.onChange);
                break;
            case 'phoneInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        phoneInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        phoneInput: prevState.maxLength.phoneInput - value.length
                    }
                }), this.onChange);
                break;
            case 'emailInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        emailInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        emailInput: prevState.maxLength.emailInput - value.length
                    }
                }), this.onChange);
                break;
            case 'purposeInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        purposeInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        purposeInput: prevState.maxLength.purposeInput - value.length
                    }
                }), this.onChange);
                break;
            case 'messageInput':
                this.setState(prevState => ({
                    validation: {
                        ...prevState.validation,
                        messageInput: regex[id].test(value) ? '' : 'invalid'
                    },
                    remainingLength: {
                        ...prevState.remainingLength,
                        messageInput: prevState.maxLength.messageInput - value.length
                    }
                }), this.onChange);
                break;
            default:
            break;
        }

        this.setState({
            [id]: value
        });
    }

    clearButton(event) {
        event.preventDefault();

        this.resetForm();
    }

    helpButton(event) {
        event.preventDefault();

        const currentStatus = this.state.displayHelp;
        this.setState({
            displayHelp: !currentStatus
        });
    }

    submitButton(event) {
        event.preventDefault();

        const payload = {
            forename: this.state.forenameInput,
            surname: this.state.surnameInput,
            address: this.state.addressInput,
            phone: this.state.phoneInput,
            email: this.state.emailInput,
            purpose: this.state.purposeInput,
            message: this.state.messageInput
        };

        const options = {
            url: process.env.REACT_APP_SERVER_MAIL_ADDRESS,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Accept': 'application/json',
                'From': payload.forename + ' ' + payload.surname + '<' + payload.email + '>',
                'Return-Path': payload.email,
                'Sender': payload.email,
                'Reply-To': payload.email
            },
            method: 'POST',
            data: payload
        };

        axios(options).then((res) => {
            console.log('Axios was successful...');
            this.resetForm();
        }, (err) => {
            console.log('Axios failed...');
        });
    }

    onChange() {
        if (this.validateForm()) {
            console.info('Valid Form')
            this.setState({
                submitDisabled: false
            });
        } else {
            console.info('Invalid Form')
            this.setState({
                submitDisabled: true
            });
        }
    }

    validateForm() {
        let valid = true;

        Object.values(this.state.validation).forEach((val) => {
            if (val.length > 0) {
                valid = false;
            }
        });

        return valid;
    }

    resetForm() {
        document.getElementById('contactForm').reset();

        this.setState({
            remainingLength: {
                forenameInput: 0,
                surnameInput: 0,
                addressInput: 0,
                phoneInput: 0,
                emailInput: 0,
                purposeInput: 0,
                messageInput: 0
            },
            validation: {
                forenameInput: '?',
                surnameInput: '?',
                addressInput: '?',
                phoneInput: '?',
                emailInput: '?',
                purposeInput: '?',
                messageInput: '?'
            },
            displayHelp: false,
            submitDisabled: true
        }, this.onChange);
    }

    render() {
        const { strong, maxLength, remainingLength, title, placeholder, validation, displayHelp, submitDisabled, level, label } = this.state;
        const { tag, minimalForm, minimalContact } = this.props;
        const forename = validation.forenameInput === 'invalid' ? 'invalid' : '';
        const surname = validation.surnameInput === 'invalid' ? 'invalid' : '';
        const address = validation.addressInput === 'invalid' ? 'invalid' : '';
        const phone = validation.phoneInput === 'invalid' ? 'invalid' : '';
        const email = validation.emailInput === 'invalid' ? 'invalid' : '';
        const purpose = validation.purposeInput === 'invalid' ? 'invalid' : '';
        const message = validation.messageInput === 'invalid' ? 'invalid' : '';
        return (
            <>
                {!minimalForm &&
                    <Contact minimalContact={minimalContact} tag={tag} />
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
                                                <input id='forenameInput' className={forename} type='text' maxLength={maxLength['forenameInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['forenameInput']} placeholder={placeholder['forenameInput']} />
                                                <span className='forenameCounter'>{remainingLength['forenameInput']}</span>
                                            </label>
                                        </div>
                                        <div className='formElement'>
                                            <label htmlFor='surnameInput'>
                                                <strong className='required'>{strong['surnameInput']}</strong>
                                                <input id='surnameInput' className={surname} type='text' maxLength={maxLength['surnameInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['surnameInput']} placeholder={placeholder['surnameInput']} />
                                                <span className='surnameCounter'>{remainingLength['surnameInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='addressInput'>
                                                <strong className='required'>{strong['addressInput']}</strong>
                                                <input id='addressInput' className={address} type='text' maxLength={maxLength['addressInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['addressInput']} placeholder={placeholder['addressInput']} />
                                                <span className='addressCounter'>{remainingLength['addressInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='phoneInput'>
                                                <strong className='required'>{strong['phoneInput']}</strong>
                                                <input id='phoneInput' className={phone} type='tel' maxLength={maxLength['phoneInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['phoneInput']} placeholder={placeholder['phoneInput']} />
                                                <span className='phoneCounter'>{remainingLength['phoneInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='emailInput'>
                                                <strong className='required'>{strong['emailInput']}</strong>
                                                <input id='emailInput' className={email} type='email' maxLength={maxLength['emailInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['emailInput']} placeholder={placeholder['emailInput']} />
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
                                                <input id='purposeInput' className={purpose} type='text' maxLength={maxLength['purposeInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['purposeInput']} placeholder={placeholder['purposeInput']} />
                                                <span className='purposeCounter'>{remainingLength['purposeInput']}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='formRow'>
                                        <div className='formElement'>
                                            <label htmlFor='messageInput'>
                                                <strong className='required'>{strong['messageInput']}</strong>
                                                <textarea id='messageInput' className={message} maxLength={maxLength['messageInput']} onKeyUp={this.onKeyUp} autoComplete="off" title={title['messageInput']} placeholder={placeholder['messageInput']}></textarea>
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
                                            <input id='clearButton' className='input' type='button' onClick={this.clearButton} title={title['clearButton']} value={placeholder['clearButton']} />
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='helpButton'>
                                            <strong>{strong['helpButton']}</strong>
                                            <input id='helpButton' className='input' type='button' onClick={this.helpButton} title={title['helpButton']} value={placeholder['helpButton']} />
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='submitButton'>
                                            <strong>{strong['submitButton']}</strong>
                                            <input id='submitButton' className='input' type='button' disabled={submitDisabled ? 'disabled' : ''} onClick={this.submitButton} title={title['submitButton']} value={placeholder['submitButton']} />
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

export default Form;
