import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import Home from './containers/HomePage/HomePage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
