import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../../../core/service/video/category/category.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  ngOnInit() {
    // Getting the list of available categories
    this.categoryService.getAll().subscribe((categories) => {
      console.log(categories);
      }
    );
  }
}
