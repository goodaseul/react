import { createSlice } from "@reduxjs/toolkit";

// 코드가 길면 import export 쓰면 됨
let user = createSlice({
    name: "user",
    initialState: { name: "kim", age: 20 },

    // state 변경법
    /* 
        1. state 수정해주는 함수 만들기
        2. 만든 함수 export  // export let {changeName, 또 다른 함수} = user.actions 
        3. 만든 함수 import
        4. let dispatch = useDispatch(); // store.js 로 요청보내주는 함수\
        5. dispatch(changeName());
    */
    reducers: {
        //state 변경함수를 action 이라고 함
        changeName(state) {
            // 기존 state
            // array/object의 경우 직접수정해도 state변경 가능
            state.name = "park"; //immer.js가 자동으로 변경해줌
        },
        changeAge(state, action) {
            state.age += action.payload; // 화물보낸 거 출력
        },
        /*또 다른 함수 가능 */
    },
});

// state 변경함수들 남음
export let { changeName, changeAge } = user.actions; // 오른쪽 자료를 변수로 빼는 문법

export default user;
