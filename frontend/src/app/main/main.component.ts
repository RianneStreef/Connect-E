import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Axios from "axios";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  @Input() displaySignUp: boolean;
  @Input() displayProfile: boolean;
  @Input() boolValue2: boolean;
  @Input() articles: object;


  @Output() clickedProfileDisplay: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();

  toggleDisplayProfile(boolValue2) {
    console.log("boolValue in main component " + boolValue2)
    this.clickedProfileDisplay.emit(boolValue2);
  }


  displayArticles() {
    this.articles = Axios.get('localhost:3000.api/articles')
    // return this.articles
    console.log(this.articles)

  }


  // axios.get('localhost:3000/api/articles')
  // .then((response) => {
  //   console.log(response.data);
  //   console.log(response.status);
  //   console.log(response.statusText);
  //   console.log(response.headers);
  //   console.log(response.config);
  // });

  constructor() { }

  ngOnInit(): void {}





}