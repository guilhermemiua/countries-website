export type GetCountriesResponse = {
  name: {
    common: string
  }
  flags: {
    png: string
  }
  population: number
  capital: string[]
  region: string
}

export type GetCountriesVariables = {
  region?: string
}

export const getCountries = async ({
  region
}: GetCountriesVariables): Promise<GetCountriesResponse[]> => {
  let response

  if (region) {
    response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
  } else {
    response = await fetch('https://restcountries.com/v3.1/all')
  }

  const data = await response.json()

  return data
}
