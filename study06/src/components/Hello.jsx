import React, { useState } from "react";
import UserName from "./UserName";
import styles from "./Hello.module.css";
const Hello = ({ age }) => {
    const [name, setName] = useState("Mike");
    //props 로 받은 건 useState 로 변경
    // const [age, setAge] = useState(props.age);

    const msg = age > 19 ? "성인입니다." : "미성년자 입니다.";

    return (
        <div>
            <h1 className={styles.box}>Hello</h1>
            {/* <button>Show name</button>
            <button>Show age</button> */}
            <p>
                {name} ({age}) : {msg}
            </p>
            <UserName name={name} />
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                    // setAge(age + 1);
                }}
            >
                Change
            </button>
        </div>
    );
};

export default Hello;
