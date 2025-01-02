import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "./../store/userSlice";
import { addCount, removeCount } from "../store.js";
import { memo, useState } from "react";

let Child = memo(function () {
    console.log("재 렌더링됨");
    return <div>자식이용</div>;
});

function Cart() {
    const stateStore = useSelector((state) => state);
    let dispatch = useDispatch(); // store.js 로 요청보내주는 함수

    let [count, setCount] = useState(0);

    return (
        <div>
            <Child count={count}></Child>
            <button onClick={() => setCount(count + 1)}>재렌더링 버튼 </button>
            {stateStore.user.name}의 장바구니
            {stateStore.user.age}
            <button
                onClick={() => {
                    dispatch(changeAge(10));
                }}
            >
                버튼 + 10
            </button>
            <button
                onClick={() => {
                    dispatch(changeAge(100));
                }}
            >
                버튼 + 100
            </button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>1</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {stateStore.product.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(addCount(stateStore.product[index].id));
                                        }}
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() => {
                                            dispatch(removeCount(stateStore.product[index].id));
                                        }}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
export default Cart;
