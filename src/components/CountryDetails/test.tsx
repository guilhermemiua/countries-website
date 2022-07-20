import { render, screen } from '@testing-library/react'
import CountryDetails from '.'
import createCountryFactory from '../../util/factories/createCountryFactory'

describe('CountryDetails', () => {
  it('should render CountryDetails component', () => {
    const country = createCountryFactory()

    render(<CountryDetails country={country} />)

    expect(screen.getByText(country.name)).toBeInTheDocument()
  })
})
