import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { HelmetProvider } from "react-helmet-async";
// import { RouterProvider } from "react-router-dom";
// dark/light mode 처럼 theme할 시 프로퍼티들의 이름이 똑같아야함

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>
);
