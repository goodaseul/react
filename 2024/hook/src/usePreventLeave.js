const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = ""; // 필수적
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload 는 returnValue 요구
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);

    return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <>
            <h1># usePreventLeave</h1>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </>
    );
};

export default UsePreventLeave;
