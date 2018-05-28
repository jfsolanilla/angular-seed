import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {CommonModule} from '../../common/common.module';
import {FormsModule} from '../../common/forms/forms.module';

import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';

import {STATES as moduleStates} from './authentication.states';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild({
      states: moduleStates
    })
  ],
  declarations: [
    LoginComponent,
    RegisterUserComponent
  ]
})
export class AuthenticationModule {
}
