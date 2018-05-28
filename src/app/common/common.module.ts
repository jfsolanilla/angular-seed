import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {FormsModule as AngularFormsModule} from '@angular/forms';
import {CommonModule as AngularCommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    AngularCommonModule,
    AngularFormsModule,
    NgbModule,
    UIRouterModule.forChild()
  ],
  declarations: [],
  exports: [
    AngularCommonModule,
    AngularFormsModule,
    NgbModule
  ],
  providers: [],
  entryComponents: []
})
export class CommonModule {
}
