import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn = true;
  displaySignUp = false;

  setDisplaySignUp() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
