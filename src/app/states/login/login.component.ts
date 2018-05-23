import {Component, OnInit} from '@angular/core';
import {StateService} from '@uirouter/angular';
import {User} from '../../core/model/user/user.model';
import {USER_EMPTY} from '../../core/model/user/user.mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: User;
  constructor(private stateService: StateService) {
    this.model = USER_EMPTY;
  }

  ngOnInit() {
  }

  nextState(state) {
    this.stateService.go(state);
  }
}
