import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Connect-E';

  changeImage() {
  const logoLink = document.getElementById('logoLink');
    logoLink.classList.remove("logoLinkImage");
    logoLink.classList.add("logoLinkImageHoover");

  };

  constructor() { }

  ngOnInit(): void {
  }

}
