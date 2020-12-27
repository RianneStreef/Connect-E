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
  @Input() displayProfile: boolean;
  // @Input() setDisplaySignUp: Function;

  // @Input() handleClick: Function;


  getClass() {
    if (this.buttonStyle === 'primary') {
      return 'btn-primary';
    } else if (this.buttonStyle === 'secondary') {
      return 'btn-secondary';
    }
  }

  constructor() {

  }

  ngOnInit(): void {}
}