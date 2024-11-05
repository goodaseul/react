import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// import { RouterProvider } from "react-router-dom";
// dark/light mode 처럼 theme할 시 프로퍼티들의 이름이 똑같아야함
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </HelmetProvider>
        </RecoilRoot>
    </React.StrictMode>
);
