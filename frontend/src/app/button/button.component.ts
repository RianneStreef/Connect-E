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


  getClass() {
    if (this.buttonStyle === 'primary') {
      return 'btn-primary';
    } else if (this.buttonStyle === 'secondary') {
      return 'btn-secondary';
    }
  }

  constructor() {
    console.log("display sign up status: ")
    console.log(this.displaySignUp);
  }

  ngOnInit(): void {}
}