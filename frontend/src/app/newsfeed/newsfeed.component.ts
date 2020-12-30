import { Component, Input, OnInit } from '@angular/core';
import Axios from 'axios';
import { ArticlesService } from './../articles.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  /*  async getProducts() {
    let allArticles = await ArticlesService.collection;
    return allArticles;
  } */

  // https://github.com/axios/axios

  async axiosFn(method, url, dataObj) {
    try {
      const response = await Axios({
        method: method, // eg 'get'
        url: url, // e.g '/user/12345',
        data: dataObj,
        // {
        //    firstName: 'Fred',
        //    lastName: 'Flintstone'
        // }
      });
      // For example, issues with database or database query,
      //    Or item doesn't exist
      // PLEASE ADD OTHER STATUS MESSAGE ERRORS
      if (response.status !== 200) {
        console.log('Error: Server error');
      } else if (response.status === 200) {
        //
        console.log('Success!');
        console.log(response.data);
        return response.data;
      }
    } catch (err) {
      // For example, backend not working
      console.log('Error: Unable to reach API');
    }
  }

  /*  // Get data, singular function
  async getData(url) {
    try {
      const res = await Axios.get(url);
      return res.data;
    } catch (err) {
      console.log(err);
      // or
      // throw err; // Will break app
    }
  }
 */
  async test() {
    /* const response = await Axios.get('http://localhost:3000/api/articles');
    if (response.status === 200) {
      const articles = response.data.articles;
      console.log(articles);
      console.log(articles[0]);
    } */
    const myFetchedData = await this.axiosFn(
      'get',
      'http://localhost:3000/api/articles',
      {},
    );
    console.log('myFetchedData');
    console.log(myFetchedData);
  }

  @Input() Articles: Object;

  constructor() {
    this.test();
  }

  ngOnInit(): void {}
}
