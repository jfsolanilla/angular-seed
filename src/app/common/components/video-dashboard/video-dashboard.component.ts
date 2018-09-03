import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../core/service/category/category.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  videos: any;

  constructor(private categoryService: CategoryService) {
    this.videos = [];
  }

  ngOnInit() {
    this.getVideosByCategory('animation');
  }

  // Getting all of the videos of one category
  getVideosByCategory(category) {
    this.categoryService.getByCategory(category).subscribe((videos) => {
      this.videos = videos.data;
    });
  }
}
