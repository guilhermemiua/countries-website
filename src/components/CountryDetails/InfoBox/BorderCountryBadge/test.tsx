import { render, screen } from '@testing-library/react'
import BorderCountryBadge from '.'

describe('BorderCountryBadge', () => {
  it('should render BorderCountryBadge component', () => {
    const border = 'Border'

    render(<BorderCountryBadge name={border} />)

    expect(screen.getByText(border)).toBeInTheDocument()
  })
})
