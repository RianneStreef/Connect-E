import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  @Input() displaySignUp: boolean;
  @Input() displayProfile: boolean;
  @Input() boolValue2: boolean;



  @Output() clickedProfileDisplay= new EventEmitter();

  toggleDisplayProfile(boolValue2) {
    this.clickedProfileDisplay.emit();
  }


  constructor() { }

  ngOnInit(): void {}





}