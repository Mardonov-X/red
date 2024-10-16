import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice.jsx";

const store = configureStore({ reducer: { todos: todoReducer } });

export default store;