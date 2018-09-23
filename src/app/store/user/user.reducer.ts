import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';
import { IUser } from 'src/app/models/user.model';

export interface IStateUser {
  data: IUser;
  form: IUser;
  isLogged: boolean;
}

export const initialState: IStateUser = {
  data: {
    firstname: 'Jacques',
    lastname: 'Celler',
    address: 'Chaussee de Charleroi 112, BXL ouiach'
  },
  form: {
    firstname: '',
    lastname: '',
    address: ''
  },
  isLogged: true
};

export function reducer(state = initialState, action: UserActions): IStateUser {
  switch (action.type) {
    case UserActionTypes.initFormUser: {
      return {
        ...state,
        form: { ...state.form, ...state.data }
      };
    }
    case UserActionTypes.changeFormUser: {
      return {
        ...state,
        form: action.payload
      };
    }
    case UserActionTypes.saveFormUser: {
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
