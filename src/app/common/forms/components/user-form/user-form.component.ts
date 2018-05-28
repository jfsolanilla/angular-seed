import {Component, OnInit} from '@angular/core';
import {ControlContainer, NgModelGroup} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgModelGroup
    }
  ]
})
export class UserFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
