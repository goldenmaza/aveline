import ContactTree from './components/contact.page';
import assert from 'assert';

describe('validates the contact tree', () => {
    beforeEach(() => {
        ContactTree.open('http://localhost:3000/p/contact');//http://www.hellstrand.org/p/contact - BUG to be fixed
    });

    it('clicks on a regional office and profile cards appear', () => {
        const regionalOffices = ContactTree.regionalOffices;
        const officeEmployees = ContactTree.officeEmployees;
        let offices = regionalOffices.$$('li');
        let employees = officeEmployees.$$('li');
        assert.notEqual(0, offices.length);
        assert.equal(0, employees.length);
        offices[0].click();
        employees = officeEmployees.$$('li');
        assert(employees.length > 0);
    });

    it('clicks on a regional office without employees and no profile cards appear', () => {
        const regionalOffices = ContactTree.regionalOffices;
        const officeEmployees = ContactTree.officeEmployees;
        let offices = regionalOffices.$$('li');
        let employees = officeEmployees.$$('li');
        assert.notEqual(0, offices.length);
        assert.equal(0, employees.length);
        offices[1].click();
        employees = officeEmployees.$$('li');
        assert(employees.length === 0);
    });

    it('verifies that profile cards are cleared if clicked between offices', () => {
        const regionalOffices = ContactTree.regionalOffices;
        const officeEmployees = ContactTree.officeEmployees;
        let offices = regionalOffices.$$('li');
        let employees = officeEmployees.$$('li');
        assert.notEqual(0, offices.length);
        assert.equal(0, employees.length);
        offices[0].click();
        employees = officeEmployees.$$('li');
        assert(employees.length > 0);
        offices[1].click();
        employees = officeEmployees.$$('li');
        assert(employees.length === 0);
    });
});
