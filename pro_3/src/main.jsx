import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemecontexProvider } from './contex/Themecontex.jsx'
import {AuthcontexProvider} from './contex/AuthContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthcontexProvider>
  <ThemecontexProvider>
    <App />
  </ThemecontexProvider>
  </AuthcontexProvider>
);