import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Connect-E';

  @Input() isLoggedIn: boolean;
  @Input() displaySignUp: boolean;
  @Input() displayProfile: boolean;

  // @Input() handleClick: Function;
  // @Input() setDisplaySignUp: Function;

  
  setDisplaySignUp() {
    if (this.displaySignUp == false) {
      console.log('changing displaySignUp status')
      console.log(this.displaySignUp)
      this.displaySignUp = true;

    }
    console.log("setting displaySetUp value")
    console.log(this.displaySignUp)
  }

  unsetDisplaySignUp() {
    if (this.displaySignUp == true) {
      console.log('changing displaySignUp status back')
      this.displaySignUp = false;
    }
    console.log("setting displaySetUp value")
    console.log(this.displaySignUp)
  }


  setLogIn() {
  this.isLoggedIn = !this.isLoggedIn;
  console.log(this.isLoggedIn);

  }


  constructor() {
    console.log('displaySignUp ' + this.displaySignUp);
    console.log('isLoggedIn ' + this.isLoggedIn);
    console.log('isProfile ' + this.displayProfile); 
   }


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
  

//   // Functions ALWAYS has a verb
//   changeLoginStatus() {
//     this.isSignedUp = !this.isSignedUp;
//   }

//   showButton() {
//     // onclick isSignedUp = false;

//     if (this.isSignedUp) {
//       // add display: none to login button & show login card
//     }
//     else {
//     // display: none on sign up button & show sign up card
//   }

// }

}
