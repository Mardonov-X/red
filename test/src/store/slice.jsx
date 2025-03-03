import { createSlice } from "@reduxjs/toolkit";

// todo - status (complete, incomplete), text, id  
const initialState = {
  todos: [
    { id: 1, text: "Create a react app", status: "incomplete" ,color: "white" },
    { id: 2, text: "Create a redux app", status: "incomplete" ,color: "white"},
    { id: 3, text: "Create a redux toolkit app", status: "incomplete",color: "white" },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToTodos: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    editTodos: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },
    removeFromTodos: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeTodoStatus: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo.status === "incomplete") {
        existingTodo.status = "complete";
      } else {
        existingTodo.status = "incomplete";
      }
    },
    changeTodoColor: (state,action)=> {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo.color === "white") {
        existingTodo.color = "red";
      } else {
        existingTodo.color = "white";
      }
} 
  },  
});

export const { addToTodos, editTodos, removeFromTodos, changeTodoStatus,changeTodoColor } = todoSlice.actions;
export default todoSlice.reducer;