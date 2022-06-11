import { Country } from './../../../types/Country/index'
import { CountryResponse } from '../../../services/countries'

const countryMapper = (country: CountryResponse): Country => {
  const countryMapped: Country = {
    nativeName:
      Array.isArray(country.name.nativeName) &&
      country.name.nativeName.length > 0
        ? Object.values(country.name.nativeName)[0].official
        : country.name.common,
    name: country?.name?.common,
    flag: country?.flags?.svg,
    population: country?.population,
    capital: country?.capital?.[0] ?? '',
    region: country?.region,
    cca3: country?.cca3,
    topLevelDomains: country.tld ?? [],
    subregion: country.subregion ?? '',
    languages: country.languages ? Object.values(country.languages) : [],
    currencies: country.currencies
      ? Object.values(country.currencies).map((currency) => currency.name)
      : [],
    borders: country.borders ?? []
  }

  return countryMapped
}

export default countryMapper
