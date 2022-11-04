import {configureStore} from '@reduxjs/toolkit';
import todosSlice from '../features/todos/TodoSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
