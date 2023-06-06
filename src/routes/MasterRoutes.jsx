import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const Main = lazy(() => import('../components/Layout/Main'));
const SingleProduct = lazy(() => import('./../pages/SingleProduct/SingleProduct'));
const Error404 = lazy(() => import('../pages/Error404'));

const MasterRoutes = () => {

    return useRoutes([
        {
            path: '/',
            element: <Main />,
            children: [
                { index: true, element: <SingleProduct /> },
                {
                    path: 'product/:id',
                    element: <SingleProduct />
                }
            ]
        },
        { path: '*', element: <Error404 /> },
    ])
};

export default MasterRoutes;