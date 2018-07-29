import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../core/model/user/user.model';
import {NgForm} from '@angular/forms';
import {StateService, Transition} from '@uirouter/angular';
import {USER_EMPTY} from '../../../core/model/user/user.mock';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  @ViewChild('createEmployeeForm')
  createEmployeeForm: NgForm;
  submitted: boolean;
  currentEmployee: User;

  constructor(private stateService: StateService,
              private transition: Transition) {
    this.submitted = false;
    this.currentEmployee = USER_EMPTY;
  }

  ngOnInit() {

  }

  submit() {
    this.submitted = true;
    if (this.createEmployeeForm && this.createEmployeeForm.valid) {
      this.submitted = false;
      this.cancel();
    }
  }

  cancel() {
    const transition = this.transition;
    const hasPrevious = transition.from().name;
    const state = hasPrevious ? transition.from() : 'transactionsList';
    const params = hasPrevious ? transition.params('from') : {};
    this.stateService.go(state, params);
  }
}
