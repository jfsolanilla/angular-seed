import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../core/model/user/user.model';
import {StateService, Transition} from '@uirouter/angular';
import {USER_EMPTY} from '../../../core/model/user/user.mock';
import {UserFormComponent} from '../../../common/forms/components/user-form/user-form.component';
import {ToastrService} from 'ngx-toastr';

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
              private transition: Transition, private toastr: ToastrService) {
    this.submitted = false;
    this.currentUser = USER_EMPTY;
  }

  ngOnInit() {

  }

  submit() {
    this.submitted = true;
    const registerUser = this.checkUser(this.userForm.getProfileInfo());
    if (this.userForm && this.userForm.isFormValid && registerUser) {
      const localUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
      localUsers.push(this.userForm.getProfileInfo());
      localStorage.setItem(`users`, JSON.stringify(localUsers));
      this.submitted = false;
      this.toastr.success(`Registration was successful`);
      this.cancel();
    } else if (!registerUser) {
      this.toastr.error('Registration failed', 'User Registration');
    }
  }

   checkUser(profileInfo) {
     const localUsers = JSON.parse(localStorage.getItem('users'));
     let registerUser = true;
     if (localUsers) {
       localUsers.forEach(user => {
         if (user.email === profileInfo.email) {
           registerUser = false; // Same email. User won't be registered
         }
       });
     }

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
