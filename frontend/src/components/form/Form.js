import React, { Component } from 'react';
import axios from 'axios';

import Heading from '../common/Heading';
import Contact from '../common/Contact';
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
            regex: { // Refactor to a central utility...
                forenameInput: RegExp("^([a-zA-ZåäöÅÄÖ.'_\\- ]{2,50})$"),
                surnameInput: RegExp("^([a-zA-ZåäöÅÄÖ.'_\\- ]{2,50})$"),
                addressInput: RegExp("^([a-zA-ZåäöÅÄÖ.'_\\- ]{3,100})$"),
                phoneInput: RegExp("^([0-9'\\- ]{3,25})$"),
                emailInput: RegExp("^([a-zA-Z0-9.\\-]{2,50})+@([a-zA-Z0-9.\\-]{2,50})+.([a-zA-Z]{2,13})$"),
                purposeInput: RegExp("^([a-zA-ZåäöÅÄÖ0-9.'\\-_ ]{2,50})$"),
                messageInput: RegExp("^([a-zA-ZåäöÅÄÖ.'\\-_ ]{2,5000})$")
            },
            maxLength: { // Refactor to a central utility...
                forenameInput: 50,
                surnameInput: 50,
                addressInput: 100,
                phoneInput: 25,
                emailInput: 113,
                purposeInput: 50,
                messageInput: 5000
            },
            remainingLength: { // Refactor to a central utility...
                forenameInput: '',
                surnameInput: '',
                addressInput: '',
                phoneInput: '',
                emailInput: '',
                purposeInput: '',
                messageInput: ''
            },
            title: { // Refactor to a central utility...
                forenameInput: 'What is your forename?',
                surnameInput: 'What is your surname?',
                addressInput: 'What is your address?',
                phoneInput: 'What is your phone number?',
                emailInput: 'What is your E-mail address?',
                purposeInput: 'What is the purpose of this contact?',
                messageInput: 'Please give a detailed message...',
                clearButton: 'If you want to clear out this contact form, press here!',
                helpButton: 'If you need help with this contact form, press here!',
                submitButton: 'If you are ready to submit this message, press here!'
            },
            placeholder: { // Refactor to a central utility...
                forenameInput: 'Forename',
                surnameInput: 'Surname',
                addressInput: 'Address',
                phoneInput: 'Phone',
                emailInput: 'E-mail',
                purposeInput: 'Purpose',
                messageInput: 'Please give a detailed message...',
                clearButton: 'Clear',
                helpButton: 'Help',
                submitButton: 'Submit'
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
            clearDisabled: true,
            displayHelp: false,
            submitDisabled: true,
            level: 'h3',
            label: 'Contact form'
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
            url: 'http://localhost:6969/mail',
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
                clearDisabled: false,
                submitDisabled: false
            });
        } else {
            console.info('Invalid Form')
            this.setState({
                clearDisabled: false,
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
                forenameInput: '',
                surnameInput: '',
                addressInput: '',
                phoneInput: '',
                emailInput: '',
                purposeInput: '',
                messageInput: ''
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
            clearDisabled: true,
            displayHelp: false,
            submitDisabled: true
        }, this.onChange);
    }

    render() {
        const { maxLength, remainingLength, title, placeholder, clearDisabled, displayHelp, submitDisabled, level, label } = this.state;
        return (
            <section>
                {!this.props.minimalForm &&
                    <Contact minimalContact={this.props.minimalContact} tag={this.props.tag} />
                }
                <section>
                    <Heading hidden={true} level={level} label={label} />
                    <form id='contactForm' encType='application/x-www-form-urlencoded' method='POST' action='#' noValidate>
                        <div className='formBody'>
                            <div className='formGroup'>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='forenameInput'>
                                            <strong className='required'>Forename:</strong>
                                            <input id='forenameInput' className='input' type='text' maxLength={maxLength['forenameInput']} onKeyUp={this.onKeyUp} title={title['forenameInput']} placeholder={placeholder['forenameInput']} />
                                            <span className='forenameCounter'>{remainingLength['forenameInput']}</span>
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='surnameInput'>
                                            <strong className='required'>Surname:</strong>
                                            <input id='surnameInput' className='input' type='text' maxLength={maxLength['surnameInput']} onKeyUp={this.onKeyUp} title={title['surnameInput']} placeholder={placeholder['surnameInput']} />
                                            <span className='surnameCounter'>{remainingLength['surnameInput']}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='addressInput'>
                                            <strong className='required'>Address:</strong>
                                            <input id='addressInput' className='input' type='text' maxLength={maxLength['addressInput']} onKeyUp={this.onKeyUp} title={title['addressInput']} placeholder={placeholder['addressInput']} />
                                            <span className='addressCounter'>{remainingLength['addressInput']}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='phoneInput'>
                                            <strong className='required'>Phone:</strong>
                                            <input id='phoneInput' className='input' type='tel' maxLength={maxLength['phoneInput']} onKeyUp={this.onKeyUp} title={title['phoneInput']} placeholder={placeholder['phoneInput']} />
                                            <span className='phoneCounter'>{remainingLength['phoneInput']}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='emailInput'>
                                            <strong className='required'>E-mail:</strong>
                                            <input id='emailInput' className='input' type='email' maxLength={maxLength['emailInput']} onKeyUp={this.onKeyUp} title={title['emailInput']} placeholder={placeholder['emailInput']} />
                                            <span className='emailCounter'>{remainingLength['emailInput']}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='formGroup'>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='purposeInput'>
                                            <strong className='required'>Purpose:</strong>
                                            <input id='purposeInput' className='input' type='text' maxLength={maxLength['purposeInput']} onKeyUp={this.onKeyUp} title={title['purposeInput']} placeholder={placeholder['purposeInput']} />
                                            <span className='purposeCounter'>{remainingLength['purposeInput']}</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='messageInput'>
                                            <strong className='required'>Message:</strong>
                                            <textarea id='messageInput' className='textarea' maxLength={maxLength['messageInput']} onKeyUp={this.onKeyUp} title={title['messageInput']} placeholder={placeholder['messageInput']}></textarea>
                                            <span className='messageCounter'>{remainingLength['messageInput']}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='formGroup'>
                                <div className='formRow'>
                                    <div className='formElement'>
                                        <label htmlFor='clearButton'>
                                            <strong>Clear button:</strong>
                                            <input id='clearButton' className='input' type='button' disabled={clearDisabled ? 'disabled' : ''} onClick={this.clearButton} title={title['clearButton']} value={placeholder['clearButton']} />
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='helpButton'>
                                            <strong>Help button:</strong>
                                            <input id='helpButton' className='input' type='button' onClick={this.helpButton} title={title['helpButton']} value={placeholder['helpButton']} />
                                        </label>
                                    </div>
                                    <div className='formElement'>
                                        <label htmlFor='submitButton'>
                                            <strong>Submit button:</strong>
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
            </section>
        );
    }
}

export default Form;
