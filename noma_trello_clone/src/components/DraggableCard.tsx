// import { Draggable } from "react-beautiful-dnd";
import { Draggable } from "@hello-pangea/dnd";

import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;
interface IDraggableCardProps {
    toDo: string;
    index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableCardProps) => {
    console.log(toDo, "has been rendered");
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic) => (
                <Card ref={magic.innerRef} {...magic.dragHandleProps} {...magic.draggableProps}>
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
};

export default React.memo(DraggableCard); // Memo == props가 바뀌지 않는다면 re-rendering 을 하지마
