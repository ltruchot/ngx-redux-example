import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store/reducers';
import { IStateUser } from 'src/app/store/user/user.reducer';
import { IUser } from 'src/app/models/user.model';
import {
  InitFormUser,
  ChangeFormUser,
  SaveFormUser
} from '../../../../store/user/user.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  user: IUser;
  constructor(private _store: Store<IState>) {}

  ngOnInit() {
    this._store.select('user').subscribe((user: IStateUser) => {
      this.user = user.form;
      console.log(this.user);
    });
    this._store.dispatch(new InitFormUser());
  }

  dispatchFormChange({ field, value }) {
    this._store.dispatch(new ChangeFormUser({ ...this.user, [field]: value }));
  }

  saveFormChange(evt: Event) {
    evt.preventDefault();
    this._store.dispatch(new SaveFormUser({ ...this.user }));
  }
}
