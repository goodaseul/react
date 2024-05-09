import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);
    return setTitle;
};

//////////////////////////////////////////////////////////////////

const UseTitle = () => {
    // titleUpdater == 위에 useTitle return 값과 동일
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div className="App">
            <div></div>
        </div>
    );
};

export default UseTitle;
