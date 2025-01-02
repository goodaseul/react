import { useState, useTransition, useDeferredValue } from "react";
import bg from "../img/bg.png";
import List from "./List";

function Home(props) {
    const [name, setName] = useState("");

    let [isPending, startTransition] = useTransition();
    let state = useDeferredValue(name);
    let a = new Array(1000).fill(0);
    return (
        <>
            <input
                onChange={(e) => {
                    startTransition(() => {
                        // isPending은 startTransition이 처리중일 때 true로 변함
                        setName(e.target.value);
                    });
                }}
            />
            {isPending
                ? "로딩중"
                : a.map(() => {
                      return <div>{state}</div>;
                  })}

            <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="container">
                <div className="row">
                    <List shoes={props.shoes} />
                </div>
            </div>

            {props.clickPage === 4 ? null : <button onClick={props.axiosButton}>Ajax버튼</button>}
        </>
    );
}

export default Home;
