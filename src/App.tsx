import {ChakraProvider} from '@chakra-ui/react'
import {RouterProvider} from 'react-router-dom'
import flagsmith from 'flagsmith'
import {FlagsmithProvider} from 'flagsmith/react'

import router from '@/router'

flagsmith.init({
    environmentID: import.meta.env.VITE_FEATURE_TOGGLE_ENV_ID
})

const App = () => {
    return (
        <FlagsmithProvider flagsmith={flagsmith}>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </FlagsmithProvider>
    )
}

export default App
