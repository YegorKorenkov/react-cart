import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/store';

const baseState = (state: RootState) => state.cart;

export const selectCartItems = createDraftSafeSelector(baseState, (state) => state.items);
export const selectDeletedItemsLength = createDraftSafeSelector(
  baseState,
  (state) => state.deletedItems.length,
);
