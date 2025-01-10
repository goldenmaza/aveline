import { usePreventionComponentState } from '../../hooks/common';

import Heading from './Heading';

export default function Prevention(props) {
    const { level, label } = usePreventionComponentState();

    return (
        <section>
            <Heading hidden={false} level={level} label={label} />
        </section>
    );
}
