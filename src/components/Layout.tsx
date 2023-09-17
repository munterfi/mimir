import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { AppBar } from './AppBar'
import { Footer } from './Footer'
import { LoadingSpinner } from '../styles/LoadingSpinner.ts'
import { useContext } from 'react'
import { AppContext } from '../store/context.tsx'

export function Layout() {
  const { loading } = useContext(AppContext)

  if (loading) {
    return (
      <Centered>
        <LoadingSpinner />
      </Centered>
    )
  }

  return (
    <Page>
      <AppBar />
      <Outlet />
      <Footer />
    </Page>
  )
}

const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  gap: 20px;
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
