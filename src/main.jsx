import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App_Context from './Context/App_Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App_Context>
      <App />
    </App_Context>
  </BrowserRouter>
)
