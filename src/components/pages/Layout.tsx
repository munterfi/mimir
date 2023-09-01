import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { AppBar } from '../widgets/AppBar'
import { Footer } from '../widgets/Footer'

export function Layout() {
    return (
        <Container>
            <AppBar />
            <Outlet />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`
