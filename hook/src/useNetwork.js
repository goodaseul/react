import React, { useEffect, useState } from "react";

const useNetwork = (onchange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onchange === "function") {
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};

const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "we just went online" : "we are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <>
            <h1># useNetwork</h1>
            {onLine ? "Online" : "Offline"}
        </>
    );
};

export default UseNetwork;
