import { assertAccessible, assertAccessibleSync } from '@sa11y/wdio';
import { recommended } from '@sa11y/preset-rules';
import ContactForm from './components/form.page';

describe('validates the accessibility of pages', () => {
    it('validate the accessibility of the Home page', async () => {
        await ContactForm.open('http://localhost:3000');//http://www.hellstrand.org/p/contact - BUG to be fixed
        await assertAccessible();
    });
});
