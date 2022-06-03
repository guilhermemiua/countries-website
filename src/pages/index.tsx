import type { NextPage } from 'next'
import Head from 'next/head'
import ChangeColorModeButton from '../components/ChangeColorModeButton'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Countries</title>
        <meta name="description" content="Next.js Countries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChangeColorModeButton />
    </>
  )
}

export default Home
