import { createSlice } from '@reduxjs/toolkit';
import { data, DataModel } from 'src/constants/data';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: data,
    deletedItems: [] as DataModel,
  },
  reducers: {
    addItem(state, { payload }) {
      const index = state.items.findIndex((obj) => obj.id === payload);
      state.items[index].amount += 1;
    },

    minusItem(state, { payload }) {
      const index = state.items.findIndex((obj) => obj.id === payload);
      state.items[index].amount -= 1;
    },

    setItemAmount(state, { payload }) {
      const index = state.items.findIndex((obj) => obj.id === payload.id);
      state.items[index].amount = payload.amount;
    },

    deleteItem(state, { payload }) {
      const index = state.items.findIndex((obj) => obj.id === payload);
      state.deletedItems.push(state.items[index]);
      state.items.splice(index, 1);
    },

    returnItem(state) {
      const returnedItem = state.deletedItems.pop();
      if (returnedItem) state.items.push(returnedItem);
    },
  },
});

export const { addItem, minusItem, deleteItem, returnItem, setItemAmount } = cartSlice.actions;

export default cartSlice.reducer;
