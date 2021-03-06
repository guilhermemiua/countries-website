export type CountryResponse = {
  name: {
    common: string
    nativeName?: {
      [key: string]: {
        official: string
      }
    }
  }
  flags: {
    svg: string
  }
  cca3: string
  population: number
  capital: string[]
  region: string
  subregion?: string
  tld?: string[]
  currencies?: {
    [key: string]: {
      name: string
    }
  }
  languages?: {
    [key: string]: string
  }
  borders?: string[]
}

export type GetCountriesVariables = {
  region?: string
}

export const getCountries = async ({
  region
}: GetCountriesVariables): Promise<CountryResponse[]> => {
  let response

  if (region) {
    response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
  } else {
    response = await fetch('https://restcountries.com/v3.1/all')
  }

  const data = await response.json()

  return data
}

export const getCountryByCCA3 = async (
  cca3: string
): Promise<CountryResponse[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)

  const data = await response.json()

  return data
}
