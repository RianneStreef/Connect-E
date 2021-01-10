import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() logInValue: boolean;
  @Input() boolValue: boolean;
  @Input() boolValue2: boolean;



  isLoggedIn = true;
  displaySignUp = false;
  displayProfile = false;



  setLogIn(logInValue: Boolean | null) {
    if (logInValue === true) {
      this. isLoggedIn = true;
    }
    else if (logInValue === false) {
      console.log('login should be displayed')

      this.isLoggedIn = false;
    }
    else {
      this.isLoggedIn = !this.isLoggedIn;
    }
    console.log('isLoggedIn value ' + this.isLoggedIn);
    }


    toggleDisplaySignUp(boolValue: Boolean | null) {

      console.log("boolValue in app component " + boolValue);

      if (boolValue === true) {
        console.log('sign up should be displayed')
        this.displaySignUp = true;
      }
      else if (boolValue === false) {
        console.log('login should be displayed')

        this.displaySignUp = false;
      }
      else {
        this.displaySignUp = !this.displaySignUp;
      }
    }


    toggleDisplayProfile(boolValue2: Boolean | null) {

      console.log("boolValue in app component " + boolValue2);

      if (boolValue2 === true) {
        this.displayProfile = true;
        console.log("profile should be displayed");

      }
      else if (boolValue2 === false) {
        this.displayProfile = false;
      }
      else {
        this.displayProfile = !this.displayProfile;
      }
    }
}
