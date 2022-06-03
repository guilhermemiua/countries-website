import Main from '.'
import { render, screen } from '@testing-library/react'

describe('<Main />', () => {
  it('should render component', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
