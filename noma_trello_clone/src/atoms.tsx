import { atom, selector } from "recoil";

export const minutesState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector<number>({
    key: "hours",
    // 값 가져오는 거
    get: ({ get }) => {
        // 아톰을 수정
        const minutes = get(minutesState);
        return minutes / 60;
    },
    // atom 을 수정하기 위한
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minutesState, minutes);
    },
});

interface IToDoState {
    [key: string]: string[];
}
export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": ["a", "b"], //띄어쓰기 때문에 ""
        Doing: ["c", "d", "e"],
        Done: ["f"],
    },
});
