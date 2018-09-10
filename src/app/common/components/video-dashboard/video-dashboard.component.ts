import {Component, Input, AfterViewInit} from '@angular/core';
import {CategoryService} from '../../../core/service/category/category.service';
import {Observable} from 'rxjs/index';
import {switchMap, tap} from 'rxjs/internal/operators';
import {CategoryObject} from '../../../core/model/category/category.model';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements AfterViewInit {
  videos$ = new Observable<CategoryObject[]>();
  @Input() category$: Observable<string>;

  constructor(private categoryService: CategoryService) {
  }

  ngAfterViewInit() {
    this.videos$ = this.category$
      .pipe(tap(x => console.log(x)), switchMap(category => this.categoryService.getByCategory(category)));
  }
}
