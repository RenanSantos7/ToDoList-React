import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TarefasProvider } from "./contexts/TarefasContext.tsx";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </React.StrictMode>,
)
