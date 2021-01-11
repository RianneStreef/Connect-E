import { Component, Input, OnInit, Output } from '@angular/core';
import { ArticlesService } from './../articles.service';
import Axios from "axios";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  @Input() myArticles: object;


  async axios (method, url, dataObj) {
    try {
      const response = await Axios({
        method: method, // eg 'get'
        url: url, // e.g '/user/12345',
        data: dataObj,

      });
      // For example, issues with database or database query,
      //    Or item doesn't exist
      // PLEASE ADD OTHER STATUS MESSAGE ERRORS
      if (response.status !== 200) {
        console.log('Error: Server error');
      } else if (response.status === 200) {
        //
        console.log('Success!');
        return response.data;
      }
    } catch (err) {
      console.log('Error: Unable to reach API');
    }
  }

  async getData() {
    const myArticles = await this.axios(
      'get',
      'http://localhost:3000/api/articles',
      {},
    );
    console.log('myArticles');
    console.log(myArticles);
    return myArticles;
  }

  constructor() {
    this.getData();
  }

  ngOnInit(): void {
  }

}
