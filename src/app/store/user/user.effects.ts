// ng
import { Injectable } from '@angular/core';
// npm
import { Actions, Effect } from '@ngrx/effects';
import { delay, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
// custom store
import {
  UserActionTypes,
  SaveFormUser
  //  SaveFormUserSuccess
} from './user.actions';

@Injectable()
export class UserEffects {
  // @Effect()
  // saveFormUser$ = this.actions$.ofType(UserActionTypes.saveFormUser).pipe(
  //   delay(2000),
  //   switchMap((action: SaveFormUser) =>
  //     of(new SaveFormUserSuccess(action.payload))
  //   )
  // );

  constructor(private actions$: Actions) {}
}
