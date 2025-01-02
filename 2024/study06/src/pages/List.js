import React from "react";

const User = ({ user, index }) => {
    return (
        <tr>
            <td key={index}>{user.email}</td>
            <td key={index}>{user.name}</td>
        </tr>
    );
};

const List = () => {
    const users = [
        {
            email: "user1@gmail.com",
            name: "정다슬",
        },
        {
            email: "user2@gmail.com",
            name: "이지수",
        },
        {
            email: "user3@gmail.com",
            name: "공룡",
        },
    ];
    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <User user={user} index={index} />
                ))}
            </tbody>
        </table>
    );
};

export default List;
