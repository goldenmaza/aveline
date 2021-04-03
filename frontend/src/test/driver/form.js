import ContactForm from './components/form.page';
import assert from 'assert';

describe('validates the contact form', () => {// TODO: Possible to use env regex for automatic validation?
    beforeEach(() => {
        ContactForm.open('http://localhost:3000');//http://www.hellstrand.org/p/contact - BUG to be fixed
    });

    it('is validating the Regex used for the Forename', () => {
        //Valid alphabetic characters:z to a, Z to A.
        ContactForm.forenameInput.setValue('xxñ');
        expect(ContactForm.forenameInput).toHaveAttribute('class', 'invalid');
        ContactForm.forenameInput.setValue('xxÑ');
        expect(ContactForm.forenameInput).toHaveAttribute('class', 'invalid');
        //Valid others characters:ö, å, ä, Ö, Å, Ä, dot, space.
        ContactForm.forenameInput.setValue('xö-');
        expect(ContactForm.forenameInput).toHaveAttribute('class', 'invalid');
        ContactForm.forenameInput.setValue('xö1');
        expect(ContactForm.forenameInput).toHaveAttribute('class', 'invalid');
        //Valid range limit:Between 2 and 50.
        ContactForm.forenameInput.setValue('x');
        expect(ContactForm.forenameInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Regex used for the Surname', () => {
        //Valid alphabetic characters:z to a, Z to A.
        ContactForm.surnameInput.setValue('xxñ');
        expect(ContactForm.surnameInput).toHaveAttribute('class', 'invalid');
        ContactForm.surnameInput.setValue('xxÑ');
        expect(ContactForm.surnameInput).toHaveAttribute('class', 'invalid');
        //Valid others characters:ö, å, ä, Ö, Å, Ä, dot, space.
        ContactForm.surnameInput.setValue('ö-');
        expect(ContactForm.surnameInput).toHaveAttribute('class', 'invalid');
        ContactForm.surnameInput.setValue('ö1');
        expect(ContactForm.surnameInput).toHaveAttribute('class', 'invalid');
        //Valid range limit:Between 2 and 50.
        ContactForm.surnameInput.setValue('x');
        expect(ContactForm.surnameInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Regex used for the Address', () => {
        //Valid alphabetic characters:z to a, Z to A.
        ContactForm.addressInput.setValue('xxñ');
        expect(ContactForm.addressInput).toHaveAttribute('class', 'invalid');
        ContactForm.addressInput.setValue('xxÑ');
        expect(ContactForm.addressInput).toHaveAttribute('class', 'invalid');
        //Valid others characters:ö, å, ä, Ö, Å, Ä, dot, space.
        ContactForm.addressInput.setValue('ö-');
        expect(ContactForm.addressInput).toHaveAttribute('class', 'invalid');
        ContactForm.addressInput.setValue('ö*');
        expect(ContactForm.addressInput).toHaveAttribute('class', 'invalid');
        //Valid digits:0 to 9.
        //Valid range limit:Between 3 and 100.
        ContactForm.addressInput.setValue('xx');
        expect(ContactForm.addressInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Regex used for the Phone', () => {
        //Valid digits:0 to 9.
        //Valid others:hyphen, plus sign, space.
        ContactForm.phoneInput.setValue('++_');
        expect(ContactForm.phoneInput).toHaveAttribute('class', 'invalid');
        ContactForm.phoneInput.setValue('++X');
        expect(ContactForm.phoneInput).toHaveAttribute('class', 'invalid');
        //Valid range limit:Between 3 and 25.
        ContactForm.phoneInput.setValue('xx');
        expect(ContactForm.phoneInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Regex used for the E-mail', () => {
        //e.g. username + AT + domain + DOT + suffix
        //     OR forename DOT surname + AT + subdomain DOT domain + DOT + suffix
        //Username:z to a, Z to A. dot. Between 2 and 50.
        ContactForm.emailInput.setValue('foreñ');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('foreÑ');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename,surname');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('f@domain.com');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        //Domain:z to a, Z to A. dot. Between 2 and 50.
        ContactForm.emailInput.setValue('forename.surname@domainñ');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename.surname@domainÑ');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename.surname@domain,com');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename@d.com');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        //Suffix:z to a, Z to A. dot. Between 2 and 13.
        ContactForm.emailInput.setValue('forename.surname@domain.cñ');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename.surname@domain.cÑ');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename.surname@domain.c,');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
        ContactForm.emailInput.setValue('forename@domain.c');
        expect(ContactForm.emailInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Regex used for the Purpose', () => {
        //Valid alphabetic characters:z to a, Z to A.
        ContactForm.purposeInput.setValue('xxñ');
        expect(ContactForm.purposeInput).toHaveAttribute('class', 'invalid');
        ContactForm.purposeInput.setValue('xxÑ');
        expect(ContactForm.purposeInput).toHaveAttribute('class', 'invalid');
        //Valid others:ö, å, ä, Ö, Å, Ä, dot, space.
        ContactForm.purposeInput.setValue('ö-');
        expect(ContactForm.purposeInput).toHaveAttribute('class', 'invalid');
        ContactForm.purposeInput.setValue('ö*');
        expect(ContactForm.purposeInput).toHaveAttribute('class', 'invalid');
        //Valid digits:0 to 9.
        //Valid range limit:Between 2 and 50.
        ContactForm.purposeInput.setValue('x');
        expect(ContactForm.purposeInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Regex used for the Message', () => {
        //Valid alphabetic characters:z to a, Z to A.
        ContactForm.messageInput.setValue('xxñ');
        expect(ContactForm.messageInput).toHaveAttribute('class', 'invalid');
        ContactForm.messageInput.setValue('xxÑ');
        expect(ContactForm.messageInput).toHaveAttribute('class', 'invalid');
        //Valid others:ö, å, ä, Ö, Å, Ä, dot, space.
        ContactForm.messageInput.setValue('ö-');
        expect(ContactForm.messageInput).toHaveAttribute('class', 'invalid');
        ContactForm.messageInput.setValue('ö*');
        expect(ContactForm.messageInput).toHaveAttribute('class', 'invalid');
        //Valid digits:0 to 9.
        //Valid range limit:Between 5 and 5000.
        ContactForm.messageInput.setValue('xxxx');
        expect(ContactForm.messageInput).toHaveAttribute('class', 'invalid');
    });

    it('is validating the Clear button', () => {
        ContactForm.forenameInput.setValue('xxx');
        ContactForm.surnameInput.setValue('xxx');
        ContactForm.addressInput.setValue('xxx');
        ContactForm.phoneInput.setValue('xxx');
        ContactForm.emailInput.setValue('xxx');
        ContactForm.purposeInput.setValue('xxx');
        ContactForm.messageInput.setValue('xxx');
        assert.equal(3, ContactForm.forenameInput.getValue().length);
        assert.equal(3, ContactForm.surnameInput.getValue().length);
        assert.equal(3, ContactForm.addressInput.getValue().length);
        assert.equal(3, ContactForm.phoneInput.getValue().length);
        assert.equal(3, ContactForm.emailInput.getValue().length);
        assert.equal(3, ContactForm.purposeInput.getValue().length);
        assert.equal(3, ContactForm.messageInput.getValue().length);
        ContactForm.clear();
        assert.equal(0, ContactForm.forenameInput.getValue().length);
        assert.equal(0, ContactForm.surnameInput.getValue().length);
        assert.equal(0, ContactForm.addressInput.getValue().length);
        assert.equal(0, ContactForm.phoneInput.getValue().length);
        assert.equal(0, ContactForm.emailInput.getValue().length);
        assert.equal(0, ContactForm.purposeInput.getValue().length);
        assert.equal(0, ContactForm.messageInput.getValue().length);
    });

    it('is validating the Help button', () => {
        const label = 'Help section';//process.env.REACT_APP_DOC_HELP_SECTION_LABEL;
        ContactForm.help();
        expect(ContactForm.displayHelp).toExist();
        expect(ContactForm.displayHelp).toHaveTextContaining(label);
        ContactForm.help();
        assert.equal(false, ContactForm.displayHelp.isExisting());
    });

    it('is validating normal use of the form', () => {
        assert.equal(false, ContactForm.submitButton.isClickable());
        ContactForm.forenameInput.setValue('Forename');
        ContactForm.surnameInput.setValue('Surname');
        ContactForm.addressInput.setValue("Address 123");
        ContactForm.phoneInput.setValue('000-12345');
        ContactForm.emailInput.setValue('forename.surname@domain.com');
        ContactForm.purposeInput.setValue('Important message');
        ContactForm.messageInput.setValue('Hi, I have an important message for you... Kind regards, Forename');
        expect(ContactForm.submitButton).toBeClickable();
        ContactForm.submit();
        assert.equal(0, ContactForm.forenameInput.getValue().length);
        assert.equal(0, ContactForm.surnameInput.getValue().length);
        assert.equal(0, ContactForm.addressInput.getValue().length);
        assert.equal(0, ContactForm.phoneInput.getValue().length);
        assert.equal(0, ContactForm.emailInput.getValue().length);
        assert.equal(0, ContactForm.purposeInput.getValue().length);
        assert.equal(0, ContactForm.messageInput.getValue().length);
        assert.equal(false, ContactForm.submitButton.isClickable());
    });
});
