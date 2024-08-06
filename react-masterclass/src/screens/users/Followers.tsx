import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

interface IFollowerContext {
    nameOfMyUser: string;
}

const Followers = () => {
    const { userId } = useParams();
    const { nameOfMyUser } = useOutletContext<IFollowerContext>();
    return <h1>Here are {nameOfMyUser} 의 Followers</h1>;
};

export default Followers;
