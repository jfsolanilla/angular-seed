import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {uiRouterConfigFn} from './config/router.config';

import {AppComponent} from './app.component';
import {STATES} from './states/states';
import {CoreModule} from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from './common/common.module';
import {AuthenticationModule} from './states/authentication/authentication.module';
import {DashboardModule} from './states/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-full-width',
      progressBar: true,
      timeOut: 5000,
      toastClass: 'custom-toast'
    }),
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    AuthenticationModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
