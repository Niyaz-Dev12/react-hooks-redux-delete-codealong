import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      state.entities.push({ id: uuid(), action: action.payload });
    },
    todoRemoved(state, action) {
      state.entities.filter((entity) => entity.id !== action.payload);
    },
  },
});

export const { todoAdded, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
