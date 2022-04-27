import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './app';
import Home from "@pages/home";
import Country from "@pages/country";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="country/:code" element={<Country />} />
            </Route>
          </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
