import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  heading = 'Connect-E';


  @Input() isLoggedIn: boolean;
  @Input() displaySignUp: boolean;
  @Input() displayProfile: boolean;
  @Input() logInValue: boolean;
  @Input() boolValue: boolean;
  @Input() boolValue2: boolean;

  @Output() didLogIn : EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() clickedSignUpDisplay: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();
  @Output() clickedProfileDisplay:  EventEmitter<boolean | null> = new EventEmitter<boolean | null>();


  setLogIn(logInValue) {
    this.didLogIn.emit(logInValue);
  }
  
  toggleDisplaySignUp(boolValue) {
    console.log("boolValue in header component " + boolValue)
    this.clickedSignUpDisplay.emit(boolValue);
  }

  toggleDisplayProfile(boolValue2) {
    console.log("boolValue in header component " + boolValue2)

    this.clickedProfileDisplay.emit(boolValue2);
  }



  constructor() {
   
   }


  ngOnInit(): void {
  }


  // changeHeaderClass() {
  //   if (window.pageYOffset > 1) {
  //     this.header.classList.add('header-background')
  //   } else {
  //     this.header.classList.remove('header-background')
  //   }
  // }
  
  // window.onscroll = function () {
  //   changeHeaderClass();
  // };
  
}
