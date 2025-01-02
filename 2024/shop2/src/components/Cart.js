import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNum } from "./../store/userSlice";
import { addCount, addMiues } from "../store.js";
const Child = memo(function () {
    // 꼭 필요한 무거울 때만사용하기 |  재렌더링
    // props가 변할때만 재렌더링
    // 기존 props와 신규 props를 매번 비교 > 길고 복잡하면 손해

    console.log("재렌더링");
    return <div>MEMO</div>;
});

// useMemo > useEffect 와 비슷하지만, html이 렌더링 되고있을 때 진행됨

const Cart = () => {
    //redux store 가져와줌

    let state = useSelector((state) => {
        return state;
    });
    // store js 로 요청보내주는 함수
    let dispatch = useDispatch();

    let [count, setCount] = useState(0);

    return (
        <div className="cart">
            <Child count={count}></Child>
            <button onClick={() => setCount(count + 2)}>+</button>
            {state.user.name}
            {state.user.age}
            <button onClick={() => dispatch(changeNum())}>변경예시</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.stocks.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => dispatch(addCount(item.id))}>+</button>
                                </td>
                                <td>
                                    <button onClick={() => dispatch(addMiues(item.id))}>-</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
