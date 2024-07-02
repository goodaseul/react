import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./defaultTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
