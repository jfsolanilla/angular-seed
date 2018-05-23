import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {uiRouterConfigFn} from './config/router.config';

import {AppComponent} from './app.component';
import {STATES} from './states/states';
import {DashboardComponent} from './states/dashboard/dashboard.component';
import {UsersComponent} from './states/users/users.component';
import {LoginComponent} from './states/login/login.component';
import {RegisterUserComponent} from './states/register-user/register-user.component';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
