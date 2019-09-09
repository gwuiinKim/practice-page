import React, { useState } from "react";
import styled from "styled-components";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ListContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  place-items: center;
  grid-gap: 10px;
`;

const MyApp = ({ children }) => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (
    result = {
      draggableId: "task1",
      type: "TYPE",
      reason: "DROP",
      source: {
        droppableId: "column1",
        index: 0
      },
      destination: {
        droppableId: "column1",
        index: 1
      }
    }
  ) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      // destination can be null
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      };
      setState(newState);
      return;
    }

    // moving from one list to another list
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setState(newState);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListContainer>
          {state.columnOrder.map(columnId => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </ListContainer>
      </DragDropContext>
    </Container>
  );
};

export default MyApp;
