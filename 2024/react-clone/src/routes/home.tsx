import React from "react";
import Layout from "./../components/layout";
import { auth } from "../firebase";
const logOut = () => {
    auth.signOut();
};

const Home = () => {
    return (
        <div>
            <h1>
                <Layout />
                <button onClick={logOut}>Log Out</button>
            </h1>
        </div>
    );
};

export default Home;
