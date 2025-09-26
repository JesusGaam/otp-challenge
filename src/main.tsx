import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppRouter from './AppRouter'

ReactDOM.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
  document.getElementById('root')
)
