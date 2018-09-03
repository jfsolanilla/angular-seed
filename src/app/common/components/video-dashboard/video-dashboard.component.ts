import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../core/service/category/category.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getVideosByCategory('animation');
  }

  getVideosByCategory(category) {
    this.categoryService.getByCategory(category).subscribe((videos) => {
      console.log(videos);
    });
  }

}
