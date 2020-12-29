import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from './../articles.service'

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  // async function getProducts() {
  //   let allArticles = await ArticlesService.collection;
  //   return allArticles;
  // }

  @Input() Articles: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
