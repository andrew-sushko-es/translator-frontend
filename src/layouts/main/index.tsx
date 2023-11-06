import React, {Suspense} from 'react'
import {Link, Outlet} from 'react-router-dom'
import {Skeleton} from '@chakra-ui/react'
import {RouterPaths} from '@/router'
import {Header, ListContainer, MainContent, Navigation} from './style'

interface Props {}

const MainLayout: React.FC<Props> = () => {
    const menuItems = Object.values(RouterPaths)
    return (
        <>
            <Header></Header>
            <main>
                <MainContent>
                    <Navigation>
                        <ListContainer>
                            {menuItems.map(item => (
                                <li key={item.path}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ListContainer>
                    </Navigation>
                    <div>
                        <Suspense fallback={<Skeleton height='200px' />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </MainContent>
            </main>
        </>
    )
}

export default MainLayout
