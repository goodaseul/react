// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Hello() {
    // function byeFn() {
    //     console.log("bye :<");
    // }
    // function hiFn() {
    //     console.log("created :)");
    //     return byeFn;
    // }
    // useEffect(hiFn, []);

    // useEffect(() => {
    //     console.log("hi :>");
    //     return function () {
    //         console.log("bye :<");
    //     };
    // }, []);

    // useEffect(function () {
    //     console.log("hi :>");
    //     return () => console.log("bye :<");
    // }, []);

    return <h1>Hello</h1>;
}
function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => {
        setValue((prev) => prev + 1);
    };
    const onChange = (event) => {
        setKeyword(event.target.value);
    };
    console.log("i run all the time");
    useEffect(() => {
        console.log("I run only once");
    }, []);
    useEffect(() => {
        console.log("I run when 'keyword' changes");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'counter' changes");
    }, [counter]);

    useEffect(() => {
        console.log("I run when 'keyword & counter' changes");
    }, [keyword, counter]);

    const [showing, setShowing] = useState(false);
    const onClickShow = () => {
        setShowing((prev) => !prev);
    };
    return (
        <div>
            {/*  <h1 className={styles.title}>{counter}</h1>
            <Button text={"Continue"} /> */}
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
            {showing ? <Hello /> : null}
            <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
