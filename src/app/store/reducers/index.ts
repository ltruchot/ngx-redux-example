import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from '../user/user.reducer';

export interface IState {
  user: fromUser.IStateUser;
}

export const reducers: ActionReducerMap<IState> = {
  user: fromUser.reducer
};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
