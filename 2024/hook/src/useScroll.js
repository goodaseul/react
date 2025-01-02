import React, { useEffect, useState } from "react";

const useScroll = () => {
    const [state, setStatus] = useState({
        x: 0,
        y: 0,
    });

    const onScroll = () => {
        setStatus({ x: window.scrollX, y: window.scrollY });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return state;
};

const UseScroll = () => {
    const { y } = useScroll();
    return (
        <div style={{ height: "100vh" }}>
            <h1># useScroll</h1>
            <p style={{ color: y > 500 ? "red" : "blue" }}>안뇽</p>
        </div>
    );
};

export default UseScroll;
