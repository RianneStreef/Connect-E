import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  @Input() displaySignUp: boolean;
  @Input() displayProfile: boolean;



  constructor() {
    console.log('displaySignUp ' + this.displaySignUp);
    console.log('isLoggedIn ' + this.isLoggedIn);
    console.log('isProfile ' + this.displayProfile);

  }

  ngOnInit(): void {}





}