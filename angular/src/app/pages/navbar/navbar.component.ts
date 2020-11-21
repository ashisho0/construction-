import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menus = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'About Us',
      link: '/'
    },
    {
      label: 'Contact Us',
      link: '../home/contact-us'
    }
  ];
  public logo = 'LOGO'


  constructor() {
  }

  ngOnInit(): void {
  }

}
