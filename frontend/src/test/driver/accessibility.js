import { assertAccessible, assertAccessibleSync } from '@sa11y/wdio';
import { recommended } from '@sa11y/preset-rules';
import ContactForm from './components/form.page';

describe('validates accessibility for all users: ', () => {
    it('verifies the Home page', async () => {
        await ContactForm.open('http://localhost:3000');
        await assertAccessible();
    });
//    it('verifies the About page', async () => {
//        await ContactForm.open('http://localhost:3000/p/about');//http://www.hellstrand.org/p/about - BUG to be fixed
//        await assertAccessible();
//    });
//    it('verifies the Portfolio page', async () => {
//        await ContactForm.open('http://localhost:3000/p/portfolio');//http://www.hellstrand.org/p/portfolio - BUG to be fixed
//        await assertAccessible();
//    });
//    it('verifies the Qualifications page', async () => {
//        await ContactForm.open('http://localhost:3000/p/qualifications');//http://www.hellstrand.org/p/qualifications - BUG to be fixed
//        await assertAccessible();
//    });
//    it('verifies the Contact page', async () => {
//        await ContactForm.open('http://localhost:3000/p/contact');//http://www.hellstrand.org/p/contact - BUG to be fixed
//        await assertAccessible();
//    });
});
