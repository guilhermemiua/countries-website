import { Country } from './../../../types/Country/index'
import { CountryResponse } from '../../../services/countries'

const countryMapper = (country: CountryResponse): Country => {
  const countryMapped: Country = {
    nativeName: Object.values(country.name.nativeName)[0].official,
    name: country?.name?.common,
    flag: country?.flags?.svg,
    population: country?.population,
    capital: country?.capital?.[0] ?? '',
    region: country?.region,
    cca3: country?.cca3,
    topLevelDomains: country.tld,
    subregion: country.subregion,
    languages: Object.values(country.languages),
    currencies: Object.values(country.currencies).map(
      (currency) => currency.name
    ),
    borders: country.borders
  }

  return countryMapped
}

export default countryMapper
