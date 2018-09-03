import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../core/service/category/category.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  categories: any;

  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }

  ngOnInit() {
    // Getting the list of available categories
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories.data;
    });
  }
}
