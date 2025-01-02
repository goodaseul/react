import { configureStore, createSlice } from "@reduxjs/toolkit";

import user from "./store/userSlice.js";

let stocks = createSlice({
    name: "stocks",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        addCount(state, action) {
            // let findId = state.id.find((item) => {
            //     return (item.id = action.payload);
            // });
            // console.log(action.payload);

            let num = state.findIndex((item) => {
                return item.id == action.payload;
            });
            state[num].count++;
        },
        addItem(state, action) {
            let findSameObj = state.findIndex((item) => {
                return item.id == action.payload.id;
            });

            if (findSameObj >= 0) {
                state[findSameObj].count++;
            } else {
                state.push(action.payload);
            }
        },
        addMiues(state, action) {
            let num = state.findIndex((item) => {
                return item.id == action.payload;
            });
            state.splice(num, 1);
        },
    },
});

export let { addCount, addItem, addMiues } = stocks.actions;

export default configureStore({
    reducer: {
        //state 등록
        user: user.reducer,
        stocks: stocks.reducer,
    },
});
