import { configureStore } from '@reduxjs/toolkit';
import labyrinthSlice from './labyrinth-slice';

const store = configureStore({
  reducer: {
    labyrinth: labyrinthSlice.reducer,
  },
});

export default store;