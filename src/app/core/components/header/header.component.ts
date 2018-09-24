// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
// models
import { IUser } from 'src/app/models/user.model';
// custom store
import { IState } from 'src/app/store/reducers';
import { IStateUser } from 'src/app/store/user/user.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: IUser;
  constructor(private _store: Store<IState>) {}

  ngOnInit() {
    this._store.select('user').subscribe((user: IStateUser) => {
      this.user = user.data;
    });
  }
}
