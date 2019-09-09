import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: white;
  user-select: none;
  background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`;

const Task = ({ task = { id: "", content: "" }, index = "" }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {task.content}
          </Container>
        );
      }}
    </Draggable>
  );
};

export default Task;
