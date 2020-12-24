import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;
  displaySignUp = false;

  setDisplaySignUp() {
    console.log('CLICKING');
    this.isLoggedIn = !this.isLoggedIn;
  }
}
