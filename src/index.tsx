import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './global.css';

const root = ReactDom.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
