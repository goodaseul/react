import React, { useRef } from "react";

const useFullScreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullscreen) {
                element.current.mozRequestFullscreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCb(true);
        }
    };

    const exitfull = () => {
        document.exitFullscreen();

        if (element.exitFullscreen) {
            element.exitFullscreen();
        } else if (element.current.mozCancelFullscreen) {
            element.current.mozCancelFullscreen();
        } else if (element.current.webkitExitFullscreen) {
            element.current.webkitExitFullscreen();
        } else if (element.current.msExitFullscreen) {
            element.current.msExitFullscreen();
        }
        runCb(false);
    };

    return { element, triggerFull, exitfull };
};

const UseFullScreen = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "we are full" : "we are small");
    };
    const { element, triggerFull, exitfull } = useFullScreen(onFullS);
    return (
        <div style={{ height: "100vh" }}>
            <h1># useFullScreen</h1>
            <div ref={element}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" />
                <button onClick={triggerFull}> Make fullscreen</button>
                <button onClick={exitfull}> Exit fullscreen</button>
            </div>
        </div>
    );
};

export default UseFullScreen;
