import { useNavigate } from "react-router-dom";

import React from "react";
import useFetch from "../hooks/useFetch";

const CreateDay = () => {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/days/", {
            //요청의 옵션
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("생성이 완료 되었습니다");
                history(`/`);
            }
        });
    };

    return (
        <div>
            <h3>현재 일수: {days.lenght}일</h3>
            <button onClick={onSubmit}>Day 추가</button>
        </div>
    );
};

export default CreateDay;
