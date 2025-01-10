import { lazy, Suspense } from "react";
import { useParams } from "react-router";

import { useContentComponentState } from '../../hooks/common';

//import Page from '../common/Page';

const Page = lazy(() => import("../common/Page"));

export default function ContentWrapper() {
    const { loading, pages, level, label } = useContentComponentState();
    const route = useParams().page;

    if (loading) {
        return (<div></div>); // Refactor to display loading animation...
    } else {
        return (
            <Suspense fallback={<h1>Loading Page...</h1>}>
                <Page pages={pages} route={route} level={level} label={label} />
            </Suspense>
        );
    }
}
