import React from "react";

const Child = ({ changeTodo }) => {
    console.log("i am Child");
    return <div>Child : {changeTodo}</div>;
};

export default React.memo(Child); // 컴포넌트를 통째로 기억함 props값이 변하는게 아니면 재호출안함
