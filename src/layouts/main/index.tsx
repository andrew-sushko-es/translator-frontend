import React, {Suspense} from 'react'
import {Link, Outlet} from 'react-router-dom'

interface Props {}

const MainLayout: React.FC<Props> = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <br />
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MainLayout
