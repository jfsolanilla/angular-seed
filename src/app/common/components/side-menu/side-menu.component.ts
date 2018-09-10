import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../core/service/category/category.service';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/operators';
import { CategoryObject } from '../../../core/model/category/category.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  categories$= new Observable<CategoryObject[]>();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    // Getting the list of available categories
    // Getting the info of the observable by pipes
    this.categories$ = this.categoryService.getAll();
  }
}
