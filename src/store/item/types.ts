import { Dispatch } from 'react';

export interface Item {
  title: string;
  done: boolean;
}

export interface AddItemAction {
  type: 'SET_ITEMS';
  items: Item[];
}

export type ItemAction = AddItemAction;

export type Reducer = (state: Item[], action: ItemAction) => Item[];

export interface Provider {
  initialState: Item[];
  reducer: Reducer;
  children: JSX.Element;
}

export type UseItemReducer = [Item[], Dispatch<ItemAction>] | [];
