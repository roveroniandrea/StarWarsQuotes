import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  links: {}[];
  activeLink: string;

  constructor(private router: Router, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.links = [{
      url: '/',
      label: 'Home'
    },
    {
      url: '/submit',
      label: 'Submit quote'
    },
    {
      url: '/about',
      label: 'About'
    }];

    iconRegistry.addSvgIcon('github-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
  }

  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
