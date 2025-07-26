import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserId = createSelector(selectUserState, (state) => state.id);
export const selectUserEmail = createSelector(selectUserState, (state) => state.email);
export const selectUserName = createSelector(selectUserState, (state) => state.name);
export const selectuserPassword = createSelector(selectUserState, (state) => state.password);
export const selectuserRole = createSelector(selectUserState, (state) => state.role);
/*  

To show data in componenets we create selectors
Selectors are used to get data from the store
Selectors are pure functions, they take the state and return a piece of it
Selectors are memoized, meaning they will only recompute when the state changes
Selectors are used to get data from the store in a reactive way, meaning they will update the component when the state changes
Selectors are used to get data from the store in a way that is
 */