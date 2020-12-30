import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() boolValue: boolean;

  isLoggedIn = true;
  displaySignUp = false;
  displayProfile = false;


  setLogIn() {
    this.isLoggedIn = !this.isLoggedIn;
    console.log('isLoggedIn value' + this.isLoggedIn);
    }


    toggleDisplaySignUp(boolValue) {

      console.log(boolValue);

      if (boolValue == true) {
        this.displaySignUp = true;
      }
      if (boolValue == false) {
        this.displaySignUp = false;
      }
      else {
        this.displaySignUp = !this.displaySignUp;
      }
    }

  //  setDisplaySignUp() {
  //   if (this.displaySignUp == false) {
  //     console.log('changing displaySignUp status')
  //     console.log(this.displaySignUp)
  //     this.displaySignUp = true;
  //   }
  // }

  // unsetDisplaySignUp() {
  //   if (this.displaySignUp == true) {
  //     console.log('changing displaySignUp status back')
  //     this.displaySignUp = false;
  //   }
  // }

  setDisplayProfile() {
    if (this.displayProfile == false) {
      console.log('changing displayProfile status')
      this.displayProfile = true;
    }
  }
  unsetDisplayProfile() {
    if (this.displayProfile == true) {
      console.log('changing displayProfile status')
      this.displayProfile = false;
    }
  }

}
