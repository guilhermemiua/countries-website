type CountryResponse = {
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

export const getCountries = async (): Promise<CountryResponse[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()

  return data
}
