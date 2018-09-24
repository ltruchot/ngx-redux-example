// ng
import { Component } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// custom store
import { IState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  state: Observable<IState>;
  constructor(store: Store<IState>) {
    this.state = store;
  }
}
