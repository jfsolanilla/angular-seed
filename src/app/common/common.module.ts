import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {FormsModule as AngularFormsModule} from '@angular/forms';
import {CommonModule as AngularCommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SideMenuComponent} from './components/side-menu/side-menu.component';

@NgModule({
  imports: [
    AngularCommonModule,
    AngularFormsModule,
    NgbModule,
    UIRouterModule.forChild()
  ],
  declarations: [
    SideMenuComponent
  ],
  exports: [
    AngularCommonModule,
    AngularFormsModule,
    NgbModule,
    SideMenuComponent
  ],
  providers: [],
  entryComponents: []
})
export class CommonModule {
}
