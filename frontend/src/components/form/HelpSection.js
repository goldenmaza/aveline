import { useHelpSectionComponentState } from '../../hooks/form';

import Heading from '../common/Heading';

export default function HelpSection() {
    const { helpSection, level, label } = useHelpSectionComponentState();

    return (
        <section className={'helpSection'}>
            <header>
                <Heading hidden={false} level={level} label={label} />
            </header>
            { helpSection }
        </section>
    );
}
