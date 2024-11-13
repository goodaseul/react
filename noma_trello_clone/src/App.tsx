import { useRecoilState, useRecoilValue } from "recoil";

import { hourSelector, minutesState } from "./atoms";
// 아톰 set
import { Draggable, DragDropContext, Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
`;
const Board = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`;
const Card = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
    // 아톰 set
    // 아톰 값 | 아톰을 수정하는 함수
    const [minutes, setMinutes] = useRecoilState(minutesState);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value); //string 을 number로 바꿔주는 +
    };
    const onHourschange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    };
    // 아톰 set

    const onDragEnd = () => {};
    return (
        <>
            <div>
                <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
                <input value={hours} onChange={onHourschange} type="number" placeholder="hours" />
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
                        <Droppable droppableId="one">
                            {(magic) => (
                                <Board ref={magic.innerRef} {...magic.droppableProps}>
                                    {toDos.map((toDo, index) => (
                                        <Draggable draggableId={toDo} index={index}>
                                            {(magic) => (
                                                <Card ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                                                    {toDo}
                                                </Card>
                                            )}
                                        </Draggable>
                                    ))}
                                    {magic.placeholder}
                                </Board>
                            )}
                        </Droppable>
                    </Boards>
                </Wrapper>
            </DragDropContext>
        </>
    );
}

export default App;
