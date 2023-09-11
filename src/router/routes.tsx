import {RouteObject} from 'react-router-dom'
import MainLayout from '@/layouts/main'
import {ErrorPage, HomePage} from '@/pages'
import React from 'react'

export enum RouterPaths {
    Home = '/',
    About = '/about'
}

const LazyAboutPage = React.lazy(() => import('@/pages/About'))

export const routes: RouteObject[] = [
    {
        path: RouterPaths.Home,
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: RouterPaths.About,
                element: <LazyAboutPage />
            }
        ]
    }
]
