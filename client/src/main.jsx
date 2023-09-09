import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalSyle } from './styles/GlobalStyles.jsx'
import { GlobalProvider } from './context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalSyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
