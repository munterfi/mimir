// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./components/pages/App";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    font-family: sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>
);

