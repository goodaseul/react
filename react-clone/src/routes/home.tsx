import React from "react";
import { auth } from "../firebase";
const logOut = () => {
    auth.signOut();
};

const Home = () => {
    return (
        <div>
            <h1>
                <button onClick={logOut}>Log Out</button>
            </h1>
        </div>
    );
};

export default Home;
