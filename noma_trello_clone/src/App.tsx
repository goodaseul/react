import { useRecoilState, useRecoilValue } from "recoil";

import { hourSelector, minutesState, toDoState } from "./atoms";
// 아톰 set
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
// import { DragDropContext, DropResult } from "react-beautiful-dnd";

import styled from "styled-components";
import Board from "./components/Board";
const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Boards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

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

    const [toDos, setToDos] = useRecoilState(toDoState);

    const onDragEnd = (info: DropResult) => {
        console.log(info);
        const { destination, draggableId, source } = info;

        if (!destination) return;

        if (destination?.droppableId === source.droppableId) {
            // same board movement.
            setToDos((allBoards) => {
                const boardCopy = [...allBoards[source.droppableId]];
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, draggableId);
                return {
                    ...allBoards,
                    [source.droppableId]: boardCopy,
                };
            });
        }
        if (destination.droppableId !== source.droppableId) {
            // cross board movement
            setToDos((allBoards) => {
                const sourceBoard = [...allBoards[source.droppableId]];
                const destinationBoard = [...allBoards[destination.droppableId]];

                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination?.index, 0, draggableId);

                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard,
                };
            });
        }
    };
    /*   setToDos((oldToDos) => {
                const toDosCopy = [...oldToDos];
                // 1. souce.index 를 지우기
                console.log("Delete", source.index);
                console.log("Delete", toDosCopy);

                toDosCopy.splice(source.index, 1);

                console.log("Delete");

                // 2. desction.index 로 item 다시 돌려두기
                console.log("put", draggableId, "on", destination.index);
                toDosCopy.splice(destination?.index, 0, draggableId);
                console.log(toDosCopy);
                return toDosCopy;
            });
            */
    return (
        <>
            <div>
                <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
                <input value={hours} onChange={onHourschange} type="number" placeholder="hours" />
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Wrapper>
                    <Boards>
                        {Object.keys(toDos).map((boardId) => (
                            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
                        ))}
                    </Boards>
                </Wrapper>
            </DragDropContext>
        </>
    );
}

export default App;
