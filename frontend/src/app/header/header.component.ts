import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Connect-E';

  @Input() isLoggedIn: boolean;
  @Input() displaySignUp: boolean;
  @Input() displayProfile: boolean;
  @Input() boolValue: boolean;
  @Input() boolValue2: boolean;

  @Output() didLogIn = new EventEmitter();
  @Output()
  clickedSignUpDisplay: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickedProfileDisplay = new EventEmitter();

  setLogIn() {
    this.didLogIn.emit();
  }

  toggleDisplaySignUp(boolValue) {
    console.log('toggle sign up button' + this.clickedSignUpDisplay);
    console.log('boolValue in header component ' + boolValue);
    this.clickedSignUpDisplay.emit(boolValue);
  }

  toggleDisplayProfile(boolValue2) {
    this.clickedProfileDisplay.emit();
  }

  constructor() {
    console.log('displaySignUp ' + this.displaySignUp);
    console.log('isLoggedIn ' + this.isLoggedIn);
    console.log('isProfile ' + this.displayProfile);
  }

  ngOnInit(): void {}

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
