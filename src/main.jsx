import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from "react-router-dom"
import StoreContextProvider from './Context/StoreContext.jsx'
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StoreContextProvider>
      <Auth0Provider
        domain="dev-whocfqzxvh4u2c5c.us.auth0.com"
        clientId="dOLrscm18dsXvCGa3Xl8itkyjYaBIOhe"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <App />
      </Auth0Provider>
    </StoreContextProvider>
  </HashRouter>
)
