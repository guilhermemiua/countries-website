import { render, screen } from '@testing-library/react'
import InfoBox from '.'
import createCountryFactory from '../../../util/factories/createCountryFactory'

describe('InfoBox', () => {
  it('should render InfoBox component', () => {
    const country = createCountryFactory()

    render(<InfoBox country={country} />)

    expect(screen.getByText(country.name)).toBeInTheDocument()
  })
})
