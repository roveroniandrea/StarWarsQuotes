import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../classes/quote';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutQuote: QuoteClass;

  constructor() {
    this.aboutQuote = new QuoteClass({text: 'Don\'t know what to say', characters: ['Andrea Roveroni']});
  }

  ngOnInit(): void {
  }

}
