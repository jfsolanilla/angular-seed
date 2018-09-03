import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll() {
    // return this.http.get('https://api.vimeo.com/categories?direction=asc&access_token=204359e5c2d7ce2911e1d51741a740f2');
    return this.http.get<Category>('https://api.vimeo.com/categories?access_token=6cd2ed3009596ecd5774129978575c49');
  }

  getByCategory(category) {
    return this.http.get<Category>(`https://api.vimeo.com/categories/${category}/videos?access_token=6cd2ed3009596ecd5774129978575c49`);
  }
}

// Loader for category queries
// Toastr when user exists, register at least one user, user doesn't exist
