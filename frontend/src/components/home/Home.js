import { lazy, Suspense } from "react";
import { Outlet } from 'react-router';

//import Header from '../header/Header';
//import Footer from '../footer/Footer';

const Header = lazy(() => import("../header/Header"));
const Footer = lazy(() => import("../footer/Footer"));

export default function Home() { // TODO: Rename to SiteLayout...
    return (
        <>
            <Suspense fallback={<h1>Loading Header...</h1>}>
                <Header />
            </Suspense>
            <Suspense fallback={<h1>Loading Outlet...</h1>}>
                <Outlet />
            </Suspense>
            <Suspense fallback={<h1>Loading Footer...</h1>}>
                <Footer />
            </Suspense>
        </>
    );
}
