import Country from "@pages/country";
import Home from "@pages/home";
import NotFound from '@pages/not-found';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './app';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/rest-countries-api-mantine/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="country/:code" element={<Country />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
