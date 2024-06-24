import { useRef, useEffect } from "react";

const useFadeIn = (duration = 1, delay = 0, opacity = 1) => {
    const element = useRef();
    useEffect(() => {
        if (typeof duration !== "number" || typeof delay !== "number") {
            return;
        }
        if (element.current) {
            const { current } = element;

            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, [duration, delay, opacity]);
    return { ref: element, style: { opacity: 0 } };
};

const UseFadeIn = () => {
    const { ref: ref1, style: style1 } = useFadeIn(1, 0, 1); // 첫 번째 요소에 대한 ref와 style
    const { ref: ref2, style: style2 } = useFadeIn(1, 5, 0.5); // 두 번째 요소에 대한 ref와 style (opacity가 0.5)

    return (
        <>
            <h1># useFadeIn</h1>
            <p ref={ref1} style={style1}>
                Hello
            </p>
            <p ref={ref2} style={style2}>
                what the
            </p>
        </>
    );
};

export default UseFadeIn;
