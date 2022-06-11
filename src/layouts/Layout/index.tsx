import { ReactChild } from 'react'
import Header from '../../components/Header'

type LayoutProps = {
  children: ReactChild
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
