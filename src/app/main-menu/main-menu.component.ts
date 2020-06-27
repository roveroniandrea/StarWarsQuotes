import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  links: {}[];
  activeLink: string;

  constructor(private router: Router) {
    this.links = [{
      url: '/',
      label: 'Home'
    },
    {
      url: '/about',
      label: 'About'
    }];

  }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
