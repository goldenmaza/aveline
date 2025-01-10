import { useHeaderComponentState } from '../../hooks/header';

import Heading from '../common/Heading';
import Handler from './Handler';

export default function Header() {
    const { level, label } = useHeaderComponentState();

    return (
        <header>
            <nav aria-label='main navigation'>
                <Heading hidden={true} level={level} label={label} />
                <Handler />
            </nav>
        </header>
    );
}
