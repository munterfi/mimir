import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'
import { AppProvider } from './store/context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
    background-color: rgb(231, 231, 231);
  }
`

root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </>
)

