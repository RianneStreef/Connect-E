import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() displayProfile: boolean;
  @Input() boolValue2: boolean;

  @Output() clickedProfileDisplay:  EventEmitter<boolean | null> = new EventEmitter<boolean | null>();

  toggleDisplayProfile(boolValue2) {
    this.clickedProfileDisplay.emit(boolValue2);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
