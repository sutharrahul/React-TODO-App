import { create } from "zustand";


const useTodoStore = create((set) => ({
  todoList: [],
  addTodo: (todo) => set((state) => ({ todoList: [...state.todoList, todo] })),
  deleteTodo: (id) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
  editTodo: (todo) => set((state) => ({ todoList: state.todoList.map(todo1 => {
    if(todo1.id === todo.id){
      return todo;
    }
    return todo1
  })
 })),
  setDoneStatus: (id, idDone) => set((state) => ({ todoList: state.todoList.map(todo1 => {
    
    if(todo1.id == id){
      return {
        ...todo1,
        done: idDone
      }
    }
      return todo1
  }) })),
}));

export { useTodoStore };
