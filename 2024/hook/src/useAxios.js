import React, { useEffect, useState } from "react";
import defaultAxios from "axios";
const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });

        setTrigger(Date.now());
    };
    useEffect(() => {
        if (!opts.url) {
            return;
        }

        axiosInstance(opts)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data,
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    error,
                });
            });
    }, [trigger]);
    return { ...state, refetch };
};
const UseAxios = () => {
    const { loading, error, data, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
    console.log(`Loading : ${loading}\nerror : ${error}\ndata : ${JSON.stringify(data)}`);
    return (
        <>
            <h1># useAxios</h1>
            <p>{data && data.status}</p>
            <p>{loading && "Loading"}</p>
            <button onClick={refetch}>Refech</button>
        </>
    );
};

export default UseAxios;
