import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isSignedUp = true;

  constructor() {}

  ngOnInit(): void {}

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