const initialData = {
  tasks: {
    task1: { id: "task1", content: "회원권 등록" },
    task2: { id: "task2", content: "레슨 등록" },
    task3: { id: "task3", content: "회원권 수정" },
    task4: { id: "task4", content: "회원 수정" }
  },
  columns: {
    column1: {
      id: "column1",
      title: "가능",
      taskIds: ["task1", "task2", "task3"]
    },
    column2: {
      id: "column2",
      title: "승인",
      taskIds: ["task4"]
    }
  },
  columnOrder: ["column1", "column2"]
};

export default initialData;
