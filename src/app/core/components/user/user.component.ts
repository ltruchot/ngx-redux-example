import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  loadingState: Observable<boolean>;
  constructor(store: Store<IState>) {
    this.loadingState = store.select('user').pipe(pluck('loading'));
  }
}
