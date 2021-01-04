import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { IArticle } from "./article";


@Injectable({
  providedIn: 'root'
})


export class ArticlesService {

  private articlesUrl = 'localhost:3000/api/articles';


constructor(
  private http: HttpClient)
{}



  // getArticles(): Observable<IArticle> {

    // console.log("articles " + <IArticle[]>)

    // return this.http.get<IArticle[]>(this.articlesUrl)
  
    // .pipe(
    //  retry(1),
      // catchError(this.handleError)
    // )
  // }


}

