import { useEffect, useState, useTransition, useDeferredValue } from "react";
import List from "./List";
import axios from "axios";
// import data from "../data";

const Home = (props) => {
    let [dataNum, setDataNum] = useState(1);
    let [isData, setIsData] = useState(true);
    let [isLoad, setIsLoad] = useState("");

    const moreShoes = () => {
        setDataNum((dataNum += 1));
        setIsLoad(true);
        axios
            .get(`https://codingapple1.github.io/shop/data${dataNum}.json`)
            .then((data) => {
                let joinArray = [...props.shoes, ...data.data];
                props.setShoes(joinArray);
                setIsLoad(false);
            })
            .catch(() => {
                alert("이제 불러올 데이터가 없다.");
                setIsData(false);
                setIsLoad(false);
            });
    };
    let [recently, setRecently] = useState([]);

    useEffect(() => {
        let localRecently = localStorage.getItem("watched");

        if (localRecently) {
            localRecently = JSON.parse(localRecently);

            localRecently = Array.from(localRecently);
            setRecently(localRecently);
        } else {
            return;
        }
    }, []);

    let [isPending, startTransition] = useTransition();
    let chun = new Array(1000).fill(0);
    let [name, setName] = useState("");

    // let state = useDeferredValue(state); // 여기 넣은게 변동사항이 생기면 늦게 처리해줌

    let [countEx, setCount] = useState(0);
    let [ageEx, setAge] = useState(20);

    const moreEx = () => {
        setCount(countEx + 1);
    };

    useEffect(() => {
        if (countEx != 0 && countEx < 3) {
            setAge(ageEx + 1);
        }
    }, [countEx]);

    return (
        <>
            <div>
                <div>안녕하십니까 전 {ageEx}</div>
                <button onClick={moreEx}>누르면한살먹기</button>
            </div>
            <input onChange={(e) => startTransition(() => setName(e.target.value))} />
            {isPending
                ? "로딩중"
                : chun.map(() => {
                      return <div>{name}</div>;
                  })}

            {/* src 는 빌드업 후 변형이 되기 때문에 import 해서 변수로 사용해줘야함 */}
            <div className="main_bg" style={{ backgroundImage: `url(${props.bg})` }}>
                <div class="recently_show">
                    <p>최근 본 상품</p>
                    {recently.map((item, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <img src={`https://codingapple1.github.io/shop/shoes${Number(item) + 1}.jpg`} />
                                    <p>{props.shoes[item]?.title}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>

            <p>{isLoad ? "로딩중입니다." : ""}</p>
            <div className="proudct_list">
                <List shoes={props.shoes} />
            </div>
            {isData ? (
                <button onClick={moreShoes} className="more_btn">
                    더보기
                </button>
            ) : null}
        </>
    );
};

export default Home;
