import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';

import {CommonModule} from '../../common/common.module';

import {STATES as moduleStates} from './dashboard.states';
import {DashboardComponent} from './dashboard/dashboard.component';

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
