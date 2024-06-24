import { useEffect, useRef } from "react";

const useHover = (onHover) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }

        return () => {
            //willunmount
            //component 가 mount 되지 않았을 때 eventListener 가 배치되게 하고싶지않음.
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []); // dependancy 가 없어야지 위에 function 을 하고나서 return 을 뱉어냄

    if (typeof onHover !== "function") {
        return;
    }

    return element;
};

const UseHover = () => {
    const sayHello = () => console.log("say Hello");
    const title = useHover(sayHello);
    return (
        <>
            <h1># useHover</h1>
            <p ref={title}>Hi Hover</p>
        </>
    );
};

export default UseHover;
