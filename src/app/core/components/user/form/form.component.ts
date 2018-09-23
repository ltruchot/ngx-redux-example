// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
// custom store
import { IState } from 'src/app/store/reducers';
import { IStateUser } from 'src/app/store/user/user.reducer';
import {
  InitFormUser,
  ChangeFormUser,
  SaveFormUser
} from 'src/app/store/user/user.actions';
// models
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  user: IUser;
  constructor(private _store: Store<IState>) {}

  ngOnInit() {
    // subscribe to any user change
    this._store.select('user').subscribe((user: IStateUser) => {
      this.user = user.form;
      console.log(this.user);
    });

    // init form with user data
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
