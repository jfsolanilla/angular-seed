import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll() {
    // return this.http.get('https://api.vimeo.com/categories?direction=asc&access_token=204359e5c2d7ce2911e1d51741a740f2');
    return this.http.get('https://api.vimeo.com/categories?direction=asc&access_token=6cd2ed3009596ecd5774129978575c49');
  }
}
