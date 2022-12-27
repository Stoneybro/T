import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Authprovider} from './Context/Auth'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Authprovider>
      <Routes>
        <Route path='*/' element={<App />} />
      </Routes>
    </Authprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
