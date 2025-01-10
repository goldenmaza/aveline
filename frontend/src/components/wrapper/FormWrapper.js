import { lazy, Suspense } from "react";
import { useContentComponentState } from '../../hooks/common';

import Heading from '../common/Heading';
//import Contact from '../contact/Contact';
//import Form from '../form/Form';

const Contact = lazy(() => import("../contact/Contact"));
const Form = lazy(() => import("../form/Form"));

export default function FormWrapper(props) {
    const { level, label } = useContentComponentState();

    return (
        <section>
            <Heading hidden={true} level={level} label={label} />
            <Suspense fallback={<h1>Loading Contact...</h1>}>
                <Contact minimalContact={false} />
            </Suspense>
            <Suspense fallback={<h1>Loading Form...</h1>}>
                <Form />
            </Suspense>
        </section>
    );
}
