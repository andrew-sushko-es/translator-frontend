import {render, screen} from '@testing-library/react'
import ErrorPage from '@/pages/Error'

describe('Error Page Test', () => {
    it('Renders Title', () => {
        render(<ErrorPage />)
        const title = screen.getByRole('heading', {level: 2})
        expect(title).toBeInTheDocument()
    })
})
