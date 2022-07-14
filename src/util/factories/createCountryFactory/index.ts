import { faker } from '@faker-js/faker'
import { Country } from '../../../types/Country/index'

const createCountryFactory = (): Country => {
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

  return country
}

export default createCountryFactory
