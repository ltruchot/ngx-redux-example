import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { IStateUser } from 'src/app/store/user/user.reducer';
import { IState } from 'src/app/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
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
