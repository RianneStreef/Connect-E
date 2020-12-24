import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonStyle: string;
  @Input() buttonText: string;
  @Input() displaySignUp: boolean;
  @Input() setDisplaySignUp: void;

  @Input() handleClick: () => void;

  getClass() {
    if (this.buttonStyle === 'primary') {
      return 'btn-primary';
    } else if (this.buttonStyle === 'secondary') {
      return 'btn-secondary';
    }
  }

  // Spinner component that shows a spinning spinner
  loadingSpinner = false;

  serverRequest() {
    this.loadingSpinner = true;
    axios.post('www.site.com').then((data) => {
      // This hasn't happened immediately as the API request takes time.
      // So the spinner will show for a few seconds
      this.loadingSpinner = false;
      if (data.status === 200) {
        // Do logged in stuff
        // set isLoggedIn = true
      } else if (data.status === 400) {
        // Display error message box
      }
    });
  }

  constructor() {
    console.log('display sign up status: ');
    console.log(this.displaySignUp);
  }

  ngOnInit(): void {}
}
