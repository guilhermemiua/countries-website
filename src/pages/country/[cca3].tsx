import { GetStaticPropsContext, NextPage } from 'next'
import { getCountries, getCountryByCCA3 } from '../../services/countries'
import { Country } from '../../types/Country'

type ViewCountryDetailsByCCA3Props = {
  country: Country
}

const ViewCountryDetailsByCCA3: NextPage<ViewCountryDetailsByCCA3Props> = ({
  country
}) => {
  return (
    <>
      <h1>{country.cca3}</h1>
    </>
  )
}

export default ViewCountryDetailsByCCA3

export async function getStaticPaths() {
  const getCountriesResponse = await getCountries({})

  const paths = getCountriesResponse.map((country) => {
    return {
      params: {
        cca3: country.cca3 ?? ''
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { cca3 } = params

  const getCountryByCCA3Response = await getCountryByCCA3(cca3)

  return {
    props: {
      country: getCountryByCCA3Response[0]
    }
  }
}
