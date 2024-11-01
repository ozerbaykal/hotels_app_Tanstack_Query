import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//client örneği oluştur
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    {/* sağlayıcı ile app bileşenini sarmala */}
    <QueryClientProvider client={queryClient}>
      <App />

    </QueryClientProvider>

  </React.StrictMode>,
)
