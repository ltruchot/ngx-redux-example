import { Action } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';

export enum UserActionTypes {
  initFormUser = '[User] init from User',
  changeFormUser = '[User] change from User',
  saveFormUser = '[User] save from User'
}

export class InitFormUser implements Action {
  readonly type = UserActionTypes.initFormUser;
}

export class ChangeFormUser implements Action {
  readonly type = UserActionTypes.changeFormUser;
  constructor(public payload: IUser) {}
}

export class SaveFormUser implements Action {
  readonly type = UserActionTypes.saveFormUser;
  constructor(public payload: IUser) {}
}

export type UserActions = InitFormUser | ChangeFormUser | SaveFormUser;
