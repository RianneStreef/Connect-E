import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = true;
  displaySignUp = false;
  displayProfile = false;

  onLogIn(newValue) {
    console.log(newValue);
    this.isLoggedIn = !this.isLoggedIn;
  }

  // Creating a function that we will pass as an
  //    event
  onLogInNoValue() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
