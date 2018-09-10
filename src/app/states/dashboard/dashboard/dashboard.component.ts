import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedCategory$ = new BehaviorSubject<string>('animation');

  constructor() {
  }

  ngOnInit() {
  }

}
