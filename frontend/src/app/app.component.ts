import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;
  isModalShowing = false;
  loginType = 'login';

  handleLoginForms(loginType) {
    this.loginType = loginType;
    this.isModalShowing = true;
  }

  setLoggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
