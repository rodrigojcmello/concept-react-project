import { ItemAction, Item } from './types';

export default function itemReducer(
  state: Item[] = [],
  action: ItemAction
): Item[] {
  if (action.type === 'SET_ITEMS') {
    return action.items;
  }
  return state;
}
