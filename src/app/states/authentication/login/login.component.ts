import {Component} from '@angular/core';
import {StateService} from '@uirouter/angular';
import {User} from '../../../core/model/user/user.model';
import {USER_EMPTY} from '../../../core/model/user/user.mock';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private stateService: StateService, private fb: FormBuilder) {
    this.buildLoginForm();
  }

  private buildLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public getLoginInfo() {
    return (this.loginForm.value);
  }

  checkUserLogin() {
    const userInfo = this.getLoginInfo();
    if (this.loginForm.valid && userInfo) {
      const localUsers = JSON.parse(localStorage.getItem('users'));
      if (localUsers) {
        localUsers.forEach(user => {
          if (user.email === userInfo.email &&
            user.password === userInfo.password) {
            this.nextState('dashboard'); // Same email. User can login
          }
        });
      } else {
        console.log('Register user first');
      }
    }
  }

  nextState(state) {
    this.stateService.go(state);
  }
}
