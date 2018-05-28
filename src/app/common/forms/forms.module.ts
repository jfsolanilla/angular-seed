import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {UserFormComponent} from './components/user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserFormComponent
  ],
  exports: [
    UserFormComponent
  ]
})
export class FormsModule {
}
