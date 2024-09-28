import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuProvider } from './contexts/MenuContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <UserContextProvider>
    <App />
    </UserContextProvider>
    </MenuProvider>
  </React.StrictMode>,
)
