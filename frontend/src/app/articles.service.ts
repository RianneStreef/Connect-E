import { Injectable } from '@angular/core';
import { IArticle } from './article';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


constructor(
  private http: HttpClient)
{}
//     this.collection = fetch(URL)
//       .then((response) => response.json())
//       .then((data) => {
//         return data;
//       });

private articlesUrl = 'api/articles';

  get collection() {
    return this.collection;
  }


// ArticlesInstance = new ArticlesService("http://localhost:3000/api/articles");



}

