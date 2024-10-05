import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MenuProvider } from './contexts/MenuContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { AdminSideMenuProvider } from './contexts/AdminSideMenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <UserContextProvider>
        <AdminSideMenuProvider>
    <App />
    </AdminSideMenuProvider>
    </UserContextProvider>
    </MenuProvider>
  </React.StrictMode>,
)
