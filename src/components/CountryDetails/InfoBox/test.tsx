import { render, screen } from '@testing-library/react'
import InfoBox from '.'
import { Country } from '../../../types/Country'
import { faker } from '@faker-js/faker'

describe('InfoBox', () => {
  it('should render InfoBox component', () => {
    const country: Country = {
      nativeName: faker.address.countryCode(),
      name: faker.address.country(),
      flag: faker.image.imageUrl(),
      population: faker.datatype.number(),
      capital: faker.address.cityName(),
      region: faker.address.cityName(),
      cca3: faker.datatype.string(4),
      topLevelDomains: faker.datatype.array(3) as string[],
      subregion: faker.address.cityName(),
      languages: faker.datatype.array(3) as string[],
      currencies: faker.datatype.array(3) as string[],
      borders: faker.datatype.array(3) as string[]
    }

    render(<InfoBox country={country} />)

    expect(screen.getByText(country.name)).toBeInTheDocument()
  })
})
