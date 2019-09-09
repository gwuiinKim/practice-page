// onDragStart
const start = {
  draggableId: "task1",
  type: "TYPE",
  source: {
    droppableId: "column1",
    index: 0
  }
};

// onDragUpdata
const update = {
  ...start,
  destination: {
    droppableId: "column1",
    index: 1
  }
};

// onDragEnd
const result = {
  ...update,
  reason: "DROP"
};
