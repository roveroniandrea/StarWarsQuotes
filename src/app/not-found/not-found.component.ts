import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../classes/quote';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  notFoundQuote: QuoteClass;

  constructor() { 
    this.notFoundQuote = new QuoteClass({text: 'This is not the quote you\'re looking for. Move along!', characters: ['Andrea Roveroni']});
  }

  ngOnInit(): void {
  }

}
