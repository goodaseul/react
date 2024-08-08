import { createBrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";

import Root from "./App";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,

        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                ],
            },
            // if 유전가 users페이지가서 무언가를 볼 수 있다면 칠드런으로 만들어야 함
            // {
            //     path: "users",
            //     element: < />,
            //     children: [
            //         {
            //             path: ":userId",
            //             element: <User />,
            //         },
            //     ],
            // },
        ],

        errorElement: <NotFound />,
        // 다른 컴포넌트들을 또 다른 컴포넌트에서 발생하는 문제로 부터 보호해줌
        // errorElement 가 없는 경우 에러가 나지 않는 것들조차 못보게  웹을 죽여버림
    },
]);

export default Router;
