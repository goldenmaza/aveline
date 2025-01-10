import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useAppComponentState } from '../hooks/app';

import {
    siteGroupLoader,
    homeGroupLoader,
    formGroupLoader,
    contentGroupLoader
} from '../redux/actions/index';

import Home from './home/Home';
import HomeWrapper from './wrapper/HomeWrapper';
import FormWrapper from './wrapper/FormWrapper';
import ContentWrapper from './wrapper/ContentWrapper';
import Prevention from './common/Prevention';
import Heading from './common/Heading';

export default function App() {
    const { level, label } = useAppComponentState();

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />, // TODO: rename to SiteLayout...
            loader: siteGroupLoader,
            errorElement: <Prevention />,
            children: [
                {
                    index: true,
                    element: <HomeWrapper />,
                    loader: homeGroupLoader
                },
                {
                    path: '/page/contact',
                    element: <FormWrapper />,
                    loader: formGroupLoader
                },
                {
                    path: '/page/:page',
                    element: <ContentWrapper />,
                    loader: contentGroupLoader
                }
            ]
        }
    ]);
    return (
        <>
            <Heading hidden={true} level={level} label={label} />
            <RouterProvider router={router} />
        </>
    );
}
