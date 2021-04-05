import Page from './page';

class ContactForm extends Page {
    get forenameInput() { return $('#forenameInput'); }
    get surnameInput() { return $('#surnameInput'); }
    get addressInput() { return $('#addressInput'); }
    get phoneInput() { return $('#phoneInput'); }
    get emailInput() { return $('#emailInput'); }
    get purposeInput() { return $('#purposeInput'); }
    get messageInput() { return $('#messageInput'); }
    get clearButton() { return $('#clearButton'); }
    get helpButton() { return $('#helpButton'); }
    get submitButton() { return $('#submitButton'); }
    get displayHelp() { return $('.helpSection'); }

    open(path) {
        super.open(path);
    }

    pause(ms) {
        super.pause(ms);
    }

    clear() {
        this.clearButton.click();
    }

    help() {
        this.helpButton.click();
    }

    submit() {
        this.submitButton.click();
    }
}

export default new ContactForm();
