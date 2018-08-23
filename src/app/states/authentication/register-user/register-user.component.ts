import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../core/model/user/user.model';
import {StateService, Transition} from '@uirouter/angular';
import {USER_EMPTY} from '../../../core/model/user/user.mock';
import {UserFormComponent} from '../../../common/forms/components/user-form/user-form.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  @ViewChild(UserFormComponent) userForm: UserFormComponent;
  submitted: boolean;
  currentUser: User;

  constructor(private stateService: StateService,
              private transition: Transition) {
    this.submitted = false;
    this.currentUser = USER_EMPTY;
  }

  ngOnInit() {

  }

  submit() {
    this.submitted = true;
    if (this.userForm && this.userForm.isFormValid && this.checkUser(this.userForm.getProfileInfo())) {
      const localUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
      localUsers.push(this.userForm.getProfileInfo());
      localStorage.setItem(`users`, JSON.stringify(localUsers));
      this.submitted = false;
      this.cancel();
    }
  }

   checkUser(profileInfo) {
     const localUsers = JSON.parse(localStorage.getItem('users'));
     let registerUser = true;
     localUsers.forEach(user => {
       if (user.email === profileInfo.email) {
         registerUser = false; // Same email. User won't be registered
       }
     });

     return registerUser;
  }

  cancel() {
    const transition = this.transition;
    const hasPrevious = transition.from().name;
    const state = hasPrevious ? transition.from() : 'login';
    const params = hasPrevious ? transition.params('from') : {};
    this.stateService.go(state, params);
  }
}
