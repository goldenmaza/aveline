import { lazy, Suspense } from "react";

import { useContentComponentState } from '../../hooks/common';

import Heading from '../common/Heading';
//import Slideshow from '../home/Slideshow';
//import Highlights from '../home/Highlights';
//import Form from '../form/Form';

const Slideshow = lazy(() => import("../home/Slideshow"));
const Highlights = lazy(() => import("../home/Highlights"));
const Form = lazy(() => import("../form/Form"));

export default function HomeWrapper(props) {
    const { level, label } = useContentComponentState();

    return (
        <section>
            <Heading hidden={true} level={level} label={label} />
            <Suspense fallback={<h1>Loading Slideshow...</h1>}>
                <Slideshow />
            </Suspense>
            <Suspense fallback={<h1>Loading Highlights...</h1>}>
                <Highlights />
            </Suspense>
            <Suspense fallback={<h1>Loading Form...</h1>}>
                <Form minimalContact={true} />
            </Suspense>
        </section>
    );
}
