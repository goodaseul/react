import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        // console.log(event);

        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        } else {
        }
    };

    useEffect(() => {
        if (typeof onBefore !== "function") {
            return;
        }

        document.addEventListener("mouseleave", handle);

        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};
const UseBeforeLeave = () => {
    const begForLief = () => console.log("plz don't leave");

    useBeforeLeave(begForLief);
    return (
        <>
            <h1># useBeforeLeave</h1>
        </>
    );
};

export default UseBeforeLeave;
