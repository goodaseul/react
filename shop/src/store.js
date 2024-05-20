import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stockNum = createSlice({
    name: "stockNum",
    initialState: [10, 11, 12],
});

let product = createSlice({
    name: "product",
    initialState: [
        {
            id: 0,
            name: "White and Black",
            count: 2,
        },
        {
            id: 2,
            name: "Grey Yordan",
            count: 1,
        },
    ],
    reducers: {
        changeQuantity(state, action) {
            //array 원하는 거 몇번째에 있는지 알려주는 함수
            let num = state.findIndex((data) => {
                return data.id === action.payload;
            });
            state[num].count++;
        },
        addItem(state, action) {
            state.push(action.payload);
        },
    },
});

export let { changeQuantity, addItem } = product.actions; // 오른쪽 자료를 변수로 빼는 문법

export default configureStore({
    reducer: {
        user: user.reducer,
        stockNum: stockNum.reducer,
        product: product.reducer,
    },
});
