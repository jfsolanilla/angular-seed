import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @Input() submitted: boolean;

  profileForm: FormGroup;

  public get isFormValid () {
    return(this.profileForm.valid);
  }

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
      secondSurname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public getProfileInfo() {
    return(this.profileForm.value);
  }

}
