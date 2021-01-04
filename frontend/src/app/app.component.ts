import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() boolValue: boolean;
  @Input() boolValue2: boolean;

  isLoggedIn = false;
  displaySignUp = false;
  displayProfile = false;

  setLogIn() {
    this.isLoggedIn = !this.isLoggedIn;
    console.log('isLoggedIn value ' + this.isLoggedIn);
  }

  toggleDisplaySignUp(boolValue: Boolean) {
    console.log('toggleDisplaySignUp called');
    console.log('boolValue in app component ' + boolValue);

    if (boolValue == true) {
      this.displaySignUp = true;
    }
    if (boolValue == false) {
      this.displaySignUp = false;
    } else {
      this.displaySignUp = !this.displaySignUp;
    }
  }

  toggleDisplayProfile(boolValue2) {
    console.log('somethings is clicked');

    if (boolValue2 == true) {
      this.displayProfile = true;
    }
    if (boolValue2 == false) {
      this.displayProfile = false;
    } else {
      this.displayProfile = !this.displayProfile;
    }
  }
}
