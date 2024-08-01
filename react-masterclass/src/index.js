import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

// dark/light mode 처럼 theme할 시 프로퍼티들의 이름이 똑같아야함
const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111",
};

const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
