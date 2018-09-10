import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {FormsModule as AngularFormsModule} from '@angular/forms';
import {CommonModule as AngularCommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {VideoDashboardComponent} from './components/video-dashboard/video-dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AngularCommonModule,
    AngularFormsModule,
    NgbModule,
    ToastrModule,
    BrowserAnimationsModule,
    UIRouterModule.forChild()
  ],
  declarations: [
    SideMenuComponent,
    VideoDashboardComponent,
  ],
  exports: [
    AngularCommonModule,
    AngularFormsModule,
    NgbModule,
    SideMenuComponent,
    VideoDashboardComponent,
    ToastrModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: []
})
export class CommonModule {
}
