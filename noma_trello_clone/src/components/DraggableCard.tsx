// import { Draggable } from "react-beautiful-dnd";
import { Draggable } from "@hello-pangea/dnd";

import React from "react";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => (props.isDragging ? "#7fb9ff" : props.theme.cardColor)};
    box-shadow: ${(props) => (props.isDragging ? "0px 2px 25px rgba(0,0,0,.05)" : "none")};
`;
interface IDraggableCardProps {
    toDo: string;
    index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableCardProps) => {
    console.log(toDo, "has been rendered");
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic, info) => (
                <Card isDragging={info.isDragging} ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
};

export default React.memo(DraggableCard); // Memo == props가 바뀌지 않는다면 re-rendering 을 하지마
