import { useEffect, useState } from "react";

const useTitle = (initalTitle) => {
    const [title, setTitle] = useState(initalTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    // mount 됐을 때 updateTitle 을 부를거고, title이 변경된다면 다시 부를거야
    return setTitle;
};

const UseTitle = () => {
    const titleUpdate = useTitle("Loading...");

    setTimeout(() => {
        titleUpdate("Home");
    }, 5000);

    return (
        <>
            <h1># useTitle</h1>
        </>
    );
};
export default UseTitle;
