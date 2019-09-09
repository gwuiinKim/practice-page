import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;
  background-color: white;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  ${props => props.theme.boxShadow}
`;
const Title = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 10px;
`;
const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  padding: 15px;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({
  column = {
    title: ""
  },
  tasks = [{ id: "", content: "" }]
}) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
