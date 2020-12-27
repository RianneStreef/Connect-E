import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() displayProfile: boolean;

  @Output() clickedQuitProfile = new EventEmitter();

  unsetDisplayProfile() {
    this.clickedQuitProfile.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

  // when profile is displayed, change buttons to profile and log out

}
