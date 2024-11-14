import { Droppable } from "@hello-pangea/dnd";
// import { Droppable } from "react-beautiful-dnd";
import React, { useRef } from "react";
import styled from "styled-components";
import DragabbleCard from "./DraggableCard";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
    width: 300px;
    padding: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;

    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IAreaProps {
    isDraggingFromThis: boolean;
    isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
    background-color: ${(props) => (props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent")};
    flex-grow: 1;
    transition: background-color 0.3s ease-in-out;
    padding: 20px;
`;

const Form = styled.form`
    width: 100%;
    input {
        width: 100%;
    }
`;

interface IBoardProps {
    toDos: string[]; //string 이뤄진 배열
    boardId: string;
}

interface IForm {
    toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = (data: IForm) => {
        setValue("toDo", "");
    };
    const onClick = () => {
        inputRef.current?.focus();
        setTimeout(() => {
            inputRef.current?.blur();
        }, 5000);
    };
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", { required: true })} type="text" placeholder={`Add task on ${boardId}`} />
                <button onClick={onClick}>click me</button>
                <Droppable droppableId={boardId}>
                    {(magic, info) => (
                        <Area isDraggingOver={info.isDraggingOver} isDraggingFromThis={Boolean(info.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
                            {toDos.map((toDo, index) => (
                                <DragabbleCard key={toDo} index={index} toDo={toDo} />
                            ))}
                            {magic.placeholder}
                        </Area>
                    )}
                </Droppable>
            </Form>
        </Wrapper>
    );
};

export default Board;
