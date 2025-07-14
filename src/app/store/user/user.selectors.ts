import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserId = createSelector(selectUserState, (state) => state.id);
export const selectUserEmail = createSelector(selectUserState, (state) => state.email);
export const selectUserName = createSelector(selectUserState, (state) => state.name);
export const selectuserPassword = createSelector(selectUserState, (state) => state.password);
