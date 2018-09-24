// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// npm
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { UserComponent } from './core/components/user/user.component';
import { FormComponent } from './core/components/user/form/form.component';
import { InputComponent } from './core/components/user/form/input/input.component';
// custom store
import { reducers } from './store/reducers';
import { AppEffects } from './store/app.effects';
import { UserEffects } from './store/user/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    FormComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects, UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
