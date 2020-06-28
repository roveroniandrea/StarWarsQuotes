import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../classes/quote';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  notFoundQuote: QuoteClass;
  allNotFoundQuote: QuoteClass[] = [];

  constructor() { 
    this.allNotFoundQuote.push(new QuoteClass({text: 'This is not the quote you\'re looking for. Move along!', characters: ['Andrea Roveroni']}));
    this.allNotFoundQuote.push(new QuoteClass({text: '404 not found? Perharps the archives are incomplete.', characters: ['Andrea Roveroni']}));
    this.allNotFoundQuote.push(new QuoteClass({text: 'I\'m sorry sir, it\'s time for you to leave. Maybe leave a star?', characters: ['Andrea Roveroni']}));
    this.setNotFoundQuote();
  }

  ngOnInit(): void {
  }

  setNotFoundQuote(){
    let index = Math.floor(Math.random() * this.allNotFoundQuote.length);
    this.notFoundQuote = this.allNotFoundQuote[index];
  }

}
