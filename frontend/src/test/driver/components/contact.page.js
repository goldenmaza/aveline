import Page from './page';

class ContactTree extends Page {
    get regionalOffices() { return $('#regionalOffices'); }
    get officeEmployees() { return $('#officeEmployees'); }

    open(path) {
        super.open(path);
    }

    pause(ms) {
        super.pause(ms);
    }
}

export default new ContactTree();
