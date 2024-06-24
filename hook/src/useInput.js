import { useState } from "react";
// useInput
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        let willUpdate = true;

        // 객체 비구조화 할당과 이름 변경을 사용하는 것
        const {
            target: { value },
        } = event;

        if (typeof validator === "function") {
            console.log(validator(value));
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

const UseInput = () => {
    // const maxLen = (value) => value.length < 10;
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Ms.", maxLen);
    return (
        <div className="useInput">
            <h1># useInput</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
};

export default UseInput;
