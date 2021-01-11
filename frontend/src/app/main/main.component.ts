import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Axios from "axios";



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
  @Input() articles: object;
  @Input() myArticles: object;



  @Output() clickedProfileDisplay: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();

  toggleDisplayProfile(boolValue2) {
    console.log("boolValue in main component " + boolValue2)
    this.clickedProfileDisplay.emit(boolValue2);
  }


  constructor() { }

  ngOnInit(): void {}





}