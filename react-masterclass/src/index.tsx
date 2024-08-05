import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

// dark/light mode 처럼 theme할 시 프로퍼티들의 이름이 똑같아야함

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={lightTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
