import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from 'src/app/store/user/user.reducer';

export interface IState {
  user: fromUser.IStateUser;
}

export const reducers: ActionReducerMap<IState> = {
  user: fromUser.reducer,
};
