import { useEffect, useRef } from "react";

const useClick = (onClick) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            //willunmount
            //component 가 mount 되지 않았을 때 eventListener 가 배치되게 하고싶지않음.
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []); // dependancy 가 없어야지 위에 function 을 하고나서 return 을 뱉어냄

    if (typeof onClick !== "function") {
        return;
    }

    return element;
};

const UseClick = () => {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return (
        <>
            <h1># useClick</h1>
            <p ref={title}>Hi Click</p>
        </>
    );
};

export default UseClick;
