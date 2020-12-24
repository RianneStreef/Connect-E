import { Component, Input, OnInit } from '@angular/core';
import { Articles } from './../mock-articles'

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  @Input() Articles: object;

  constructor() { }

  ngOnInit(): void {
  }

}
