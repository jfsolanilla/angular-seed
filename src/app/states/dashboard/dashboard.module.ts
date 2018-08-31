import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {CommonModule} from '../../common/common.module';

import {DashboardComponent} from './dashboard/dashboard.component';

import {STATES as moduleStates} from './dashboard.states';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: moduleStates
    })
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
