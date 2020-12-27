import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() didLogIn = new EventEmitter();
  @Output() clickedSignUp = new EventEmitter();
  @Output() clickedLogIn = new EventEmitter();
  @Output() clickedProfile = new EventEmitter();

  // @Input() handleClick: Function;
  // @Input() setDisplaySignUp: Function;

  setLogIn() {
    this.didLogIn.emit();
  }
  
  setDisplaySignUp() {
    this.clickedSignUp.emit();
  }
 
  unsetDisplaySignUp() {
    this.clickedLogIn.emit();
  }
 
 
  setDisplayProfile() {
    this.clickedProfile.emit();
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
