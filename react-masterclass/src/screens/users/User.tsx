import React from "react";
import { useParams, Outlet, Link, useOutletContext } from "react-router-dom";
import { users } from "../../db";

const User = () => {
    console.log(useOutletContext());

    const { userId } = useParams();
    return (
        <div>
            <h1>
                User with it {userId} is named: {users[Number(userId) - 1].name}
            </h1>
            <hr />
            <Link to="followers">See followers</Link>
            {/*
                /followers > localhost:3000/followers 
                followers > localhost:3000/~현재있는 주소~/followers  
            */}
            <Outlet
                context={{
                    nameOfMyUser: users[Number(userId) - 1].name,
                }}
            />
        </div>
    );
};

export default User;
