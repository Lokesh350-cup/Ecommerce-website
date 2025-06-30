import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext'; // ✅ Correct import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider> {/* ✅ Capitalized correctly */}
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
