import styled from 'styled-components'

export function Footer() {
  return <Banner>Copyright {new Date().getFullYear()}</Banner>
}

const Banner = styled.div`
  background: black;
  color: white;
  padding: 5px;
  text-align: center;
`
