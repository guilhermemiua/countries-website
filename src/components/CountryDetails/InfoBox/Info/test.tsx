import { render, screen } from '@testing-library/react'
import Info from '.'

describe('Info', () => {
  it('should render Info component with string value', () => {
    render(<Info label="Name" value={'Brazil'} />)

    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('should render Info component with array of strings value', () => {
    render(<Info label="Name" value={['Brazil', 'Chile']} />)

    expect(screen.getByText('Brazil, Chile')).toBeInTheDocument()
  })
})
