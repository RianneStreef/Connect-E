import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() displayProfile: boolean;
  @Input() boolValue2: boolean;

  @Output() clickedProfileDisplay = new EventEmitter();

  toggleDisplayProfile(boolValue2) {
    this.clickedProfileDisplay.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }


}
