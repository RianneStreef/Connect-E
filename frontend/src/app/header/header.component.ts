import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Connect-E';

  isSignedUp = true;

  constructor() { }


  ngOnInit(): void {
  }

  // changeHeaderClass() {
//     if (window.pageYOffset > 1) {
//       header.classList.add('header-background')
//     } else {
//       header.classList.remove('header-background')
//     }
//   }window.onscroll = function () {
//     changeHeaderClass();
//   };
  

  // Functions ALWAYS has a verb
  changeLoginStatus() {
    this.isSignedUp = !this.isSignedUp;
  }

  showButton() {
    // onclick isSignedUp = false;

    if (this.isSignedUp) {
      // add display: none to login button & show login card
    }
    else {
    // display: none on sign up button & show sign up card
  }

}

}
