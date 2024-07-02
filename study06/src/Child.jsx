import React from "react";

const Child = ({ changeTodo }) => {
    console.log("i am Child");
    return <div>Child : {changeTodo}</div>;
};

export default React.memo(Child); // 컴포넌트를 통째로 기억함 props값이 변하는게 아니면 재호출안함
// 원시형/ 참조형 타입
// 원시형 == 값 그 자체 스트링 숫자 boolean
// 참조형 == 안에 값이 너무많아서 정확한 값이라고 얘기하기 힘든 참조된 주소를 가져가는 것 / 객체, 배열
