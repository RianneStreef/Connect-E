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


  @Output() clickedQuitProfile = new EventEmitter();

  unsetDisplayProfile() {
    this.clickedQuitProfile.emit();
  }


  constructor() { }

  ngOnInit(): void {}





}