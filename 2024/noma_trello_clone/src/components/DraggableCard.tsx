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
    toDoId: number;
    toDoText: string;
    index: number;
}

const DraggableCard = ({ toDoId, toDoText, index }: IDraggableCardProps) => {
    return (
        <Draggable draggableId={toDoId + ""} index={index}>
            {(magic, info) => (
                <Card isDragging={info.isDragging} ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                    {toDoText}
                </Card>
            )}
        </Draggable>
    );
};

export default React.memo(DraggableCard); // Memo == props가 바뀌지 않는다면 re-rendering 을 하지마
