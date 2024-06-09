import { createSlice } from "@reduxjs/toolkit";

//usestate 역할 // state 하나를 slice라고 부름
let user = createSlice({
    name: "user",
    // initialState: "daseul",

    initialState: {
        name: "daseul",
        age: 21,
    },

    //함수자리
    reducers: {
        changeName(state) {
            //기존 state
            state.name = `jeong ${state.name}`;

            // return `jeong ${state}`;
        },
        changeNum(state) {
            state.age += 1;
        },
    },
});
export let { changeName, changeNum } = user.actions;
export default user;
