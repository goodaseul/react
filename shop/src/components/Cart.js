import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "./../store/userSlice";
import { changeQuantity } from "./../store";

function Cart() {
    const stateStore = useSelector((state) => state);
    let dispatch = useDispatch(); // store.js 로 요청보내주는 함수
    return (
        <div>
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
                                            dispatch(changeQuantity(stateStore.product[index].id));
                                            // index 보단 버튼의 옆의 id값을 가져오는 거가 좀 더 정확
                                        }}
                                    >
                                        +
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
