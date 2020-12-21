import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

// changeHeaderClass() {
//     if (window.pageYOffset > 1) {
//       header.classList.add('header-background')
//     } else {
//       header.classList.remove('header-background')
//     }
//   }window.onscroll = function () {
//     changeHeaderClass();
//   };
  

//if newsfeed is displayed in main -> then show side menu

  constructor() { }

  ngOnInit(): void {
  }

}
