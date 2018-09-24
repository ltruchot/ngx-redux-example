import { UserActions, UserActionTypes } from './user.actions';
import { IUser } from 'src/app/models/user.model';

export interface IStateUser {
  data: IUser;
  form: IUser;
  isLogged: boolean;
  loading: boolean;
}

export const initialState: IStateUser = {
  data: {
    firstname: 'Jacques',
    lastname: 'Celler',
    address: 'Chaussee de Charleroi 112, BXL ouaich',
  },
  form: {
    firstname: '',
    lastname: '',
    address: '',
  },
  isLogged: true,
  loading: false,
};

export function reducer(state = initialState, action: UserActions): IStateUser {
  switch (action.type) {
    case UserActionTypes.initFormUser: {
      return {
        ...state,
        form: { ...state.data },
      };
    }
    case UserActionTypes.changeFormUser: {
      return {
        ...state,
        form: action.payload,
      };
    }
    case UserActionTypes.saveFormUser: {
      return {
        ...state,
        data: action.payload,
        // loading: true
      };
    }
    // case UserActionTypes.saveFormUserSuccess: {
    //   return {
    //     ...state,
    //     data: action.payload,
    //     loading: false
    //   };
    // }
    default: {
      return state;
    }
  }
}
