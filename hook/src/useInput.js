import { useState } from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        let willUpdate = true;

        if (typeof validator === "function") {
            console.log(validator(value));
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(event.target.value);
        }
    };
    return { value, onChange };
};

//////////////////////////////////////////////////////////////////

const UseInput = () => {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("Ms", maxLen); // name == value
    return (
        <div className="UseInput">
            {/* useInput */}
            <input placeholder="Name" {...name} />
            {/* value={name.value} > {...name} */}
        </div>
    );
};

export default UseInput;
